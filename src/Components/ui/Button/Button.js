import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonUI(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">{props.title}</Button>
    </Stack>
  );
}