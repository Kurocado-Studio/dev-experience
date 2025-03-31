import React from 'react';

import { useAriaTextField } from 'src/hooks/useAriaTextField';
import type { TextFieldProps } from 'src/types';

export function AriaTextField(props: TextFieldProps): React.ReactNode {
  const { labelProps, inputProps, errorMessageProps, descriptionProps } =
    useAriaTextField(props);

  return (
    <div>
      <label {...labelProps}>{labelProps.children}</label>
      <input {...inputProps} />
      {descriptionProps?.children ? <div {...descriptionProps} /> : null}
      {errorMessageProps?.children ? <div {...errorMessageProps} /> : null}
    </div>
  );
}
