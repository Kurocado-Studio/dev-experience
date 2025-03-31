import { useField } from '@conform-to/react';
import { ReactTestingLibrary } from '@internal/config';
import React from 'react';
import type { Mock } from 'vitest';

import { AriaTextField } from '../src/components/AriaTextField';
import {
  TestForm,
  mockFieldMetadata,
  mockFormMetadata,
  testA11y,
} from '../src/utils';

const { render, screen } = ReactTestingLibrary;

vi.mock('@conform-to/react', async () => {
  return {
    ...(await vi.importActual('@conform-to/react')),
    useField: vi.fn(),
    useInputControl: vi.fn(),
  };
});

describe('useAriaTextField Hook - Accessibility Tests', () => {
  const useFieldMock = useField as Mock<typeof useField>;

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should have no accessibility violations with default props', async () => {
    useFieldMock.mockReturnValue([
      mockFieldMetadata({
        name: 'test',
        valid: true,
        descriptionId: 'desc-id',
        errorId: 'error-id',
        initialValue: '',
      }),
      mockFormMetadata(),
    ]);

    const results = await testA11y(
      <AriaTextField name='test' label='Test Label' />,
      TestForm,
    );

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when there is an error', async () => {
    useFieldMock.mockReturnValue([
      mockFieldMetadata({
        name: 'test',
        errors: ['Field is required'],
        valid: false,
        descriptionId: 'desc-id',
        errorId: 'error-id',
      }),
      mockFormMetadata(),
    ]);

    const results = await testA11y(
      <AriaTextField
        name='test'
        label='Test Label'
        errorMessage='Field is required'
      />,
      TestForm,
    );

    expect(results).toHaveNoViolations();
  });

  it('should associate label and input correctly', () => {
    useFieldMock.mockReturnValue([
      mockFieldMetadata({
        name: 'test',
        valid: true,
        descriptionId: 'desc-id',
        errorId: 'error-id',
      }),
      mockFormMetadata(),
    ]);

    render(
      <TestForm>
        <AriaTextField name='test' label='Test Label' />
      </TestForm>,
    );

    const input = screen.getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
  });

  it('should include aria-describedby when description is provided', () => {
    useFieldMock.mockReturnValue([
      mockFieldMetadata({
        name: 'test',
        valid: true,
        descriptionId: 'desc-id',
        errorId: 'error-id',
      }),
      mockFormMetadata(),
    ]);

    render(
      <TestForm>
        <AriaTextField
          name='test'
          label='Test Label'
          description='This is a description'
        />
      </TestForm>,
    );

    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-describedby', 'desc-id');

    const description = screen.getByText('This is a description');
    expect(description).toBeInTheDocument();
    expect(description.id).toBe('desc-id');
  });

  it('should include aria-errormessage when there is an error', () => {
    useFieldMock.mockReturnValue([
      mockFieldMetadata({
        name: 'test',
        errors: ['Error message'],
        valid: false,
        descriptionId: 'desc-id',
        errorId: 'error-id',
      }),
      mockFormMetadata(),
    ]);

    render(
      <TestForm>
        <AriaTextField name='test' label='Test Label' />
      </TestForm>,
    );

    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'Error message');

    const errorMessage = screen.getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.id).toBe('error-id');
  });
});
