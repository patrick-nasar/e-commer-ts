import { Alert, Snackbar } from '@mui/material'

type TSnackbarComp = {
    open: boolean,
    setOpen: (open: boolean) => void,
    barType: 'error' | 'success' | 'info',
    massege: string
}

export const SnackbarComp = ({ open, setOpen, barType, massege }: TSnackbarComp) => {
    // error
    // success

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={barType}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {massege}
                </Alert>
            </Snackbar>
        </div>
    )
}
