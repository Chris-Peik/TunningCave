import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}


const WebBlock = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      scrollSnapAlign: 'start',
      p: 0,
      m: 0,
      bgcolor: 'background.body',
      border: 0,
    }}
  >
    {children}
  </Box>
);

export default function WebFrameX() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <WebBlock>
          <iframe
            src="/landing"
            title="Landing Page"
            style={{ width: '100vw', height: '100vh', border: 'none', display: 'block', background: '#000' }}
            allowFullScreen
          />
        </WebBlock>
        <WebBlock>
          <iframe
            src="/"
            title="Página Index"
            style={{ width: '100vw', height: '100vh', border: 'none', display: 'block', background: '#fff' }}
            allowFullScreen
          />
        </WebBlock>
      </Box>
    </CssVarsProvider>
  );
}
