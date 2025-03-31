import { FormProvider, useForm } from '@conform-to/react';
import React from 'react';

export function TestForm({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [form] = useForm({});

  return (
    <FormProvider context={form.context}>
      <form id={form.id}>{children}</form>
    </FormProvider>
  );
}
