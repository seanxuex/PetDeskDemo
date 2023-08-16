import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogActions } from '@mui/material'

const ErrorBoundary = ({ error, children }) => {
  const [errorDialogOpen, setErrorDialogOpen] = useState(false)

  useEffect(() => {
    if (error && error.length > 0) {
      setErrorDialogOpen(true)
    }
  }, [error])

  const onClose = () => {
    setErrorDialogOpen(false)
  }

  return (
    <>
      <Dialog fullWidth open={errorDialogOpen}>
        <DialogContent>
          <section>{error}</section>
        </DialogContent>
        <DialogActions>
          <button onClick={onClose}>Ok</button>
        </DialogActions>
      </Dialog>
      {children}
    </>
  )
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  error: PropTypes.string.isRequired,
}

export default ErrorBoundary
