import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Calculator = () => {
  const [displayValue, setDisplayValue] = React.useState('');
  const displayRef = React.useRef();

  const handleClickNumber = (number) => {
    const currentPosition = displayRef.current?.selectionStart;
    const newValue = displayValue.slice(0, currentPosition) + number + displayValue.slice(currentPosition);
    const newPosition = currentPosition + 1;
    setDisplayValue(newValue);
    moveCursor(newPosition);
  };

  const handleClear = () => {
    setDisplayValue('');
    moveCursor(0);
  };

  const handleBackspace = () => {
    const currentPosition = displayRef.current?.selectionStart;
    if (currentPosition > 0) {
      const newValue = displayValue.slice(0, currentPosition - 1) + displayValue.slice(currentPosition);
      setDisplayValue(newValue);
      moveCursor(currentPosition - 1);
    }
  };

  const handleMoveRight = () => {
    const currentPosition = displayRef.current?.selectionStart;
    moveCursor(currentPosition + 1);
  };

  const handleMoveLeft = () => {
    const currentPosition = displayRef.current?.selectionStart;
    moveCursor(currentPosition - 1);
  };

  const moveCursor = (position) => {
    if (displayRef.current) {
      displayRef.current.focus();
      displayRef.current.setSelectionRange(position, position);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
            id="display"
            label="Display"
            value={displayValue}
            fullWidth
            inputRef={displayRef}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleBackspace} fullWidth style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
            Backspace
          </Button>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={3} style={{marginRight:'2px'}}>
            <Button variant="contained" onClick={() => handleClickNumber('7')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('8')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('9')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              9
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={3} style={{marginRight:'2px'}}>
            <Button variant="contained" onClick={() => handleClickNumber('4')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('5')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('6')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              6
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={3} style={{marginRight:'2px'}}>
            <Button variant="contained" onClick={() => handleClickNumber('1')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('2')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('3')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              3
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={3} style={{marginRight:'2px'}}>
            <Button variant="contained" onClick={() => handleClickNumber('0')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('.')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={() => handleClickNumber('-')} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
              -
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleMoveLeft} fullWidth style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
            Move left
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleMoveRight} fullWidth style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
            Move Right
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleClear} fullWidth style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', color: 'black' }}>
            Clear All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calculator;
