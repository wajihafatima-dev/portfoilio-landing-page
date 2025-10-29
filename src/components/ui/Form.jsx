"use client";

import React, { createContext, useContext } from "react";
import { FormProvider, useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  FormControl as MUIFormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";

const FormFieldContext = createContext({ name: "" });

export const Form = FormProvider;

// FormField wraps Controller from react-hook-form
export function FormField({ name, control, children, ...props }) {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} control={control} {...props} render={children} />
    </FormFieldContext.Provider>
  );
}

// Hook to get field state
export function useFormField() {
  const { name } = useContext(FormFieldContext);
  const { getFieldState } = useFormContext();
  const fieldState = getFieldState(name);

  return {
    name,
    error: fieldState?.error,
  };
}

// FormItem wrapper
export function FormItem({ children, ...props }) {
  return (
    <MUIFormControl data-slot="form-item" {...props}>
      {children}
    </MUIFormControl>
  );
}

// Label
export function FormLabel({ children, ...props }) {
  const { error, name } = useFormField();
  return (
    <InputLabel htmlFor={name} error={!!error} data-slot="form-label" {...props}>
      {children}
    </InputLabel>
  );
}

// Control (TextField)
export function FormControl({ ...props }) {
  const { error, name } = useFormField();
  return (
    <TextField id={name} error={!!error} data-slot="form-control" {...props} />
  );
}

// Description text
export function FormDescription({ children, ...props }) {
  return (
    <FormHelperText data-slot="form-description" {...props}>
      {children}
    </FormHelperText>
  );
}

// Error message
export function FormMessage({ ...props }) {
  const { error } = useFormField();
  if (!error) return null;

  return (
    <FormHelperText error data-slot="form-message" {...props}>
      {String(error.message)}
    </FormHelperText>
  );
}
