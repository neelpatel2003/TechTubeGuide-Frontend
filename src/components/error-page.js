import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
   const error = useRouteError();
   console.error(error);

   return (
      <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <Alert severity="error" sx={{ fontSize: 20, mb: 2 }}>
            <strong>Oops!</strong> Sorry, an unexpected error has occurred.
         </Alert>
         <Box>
            <i>{error.statusText || error.message}</i>
         </Box>
      </Box>
   );
}