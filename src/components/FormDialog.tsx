import React from 'react'
import { Dialog, DialogContent, Box, withStyles } from '@material-ui/core'
import DialogTitleWithCloseIcon from './DialogTitleWithCloseIcon'

const styles: any = (theme: { spacing: (arg0: number) => any }) => ({
  dialogPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
    maxWidth: 420,
  },
  actions: {
    marginTop: theme.spacing(2),
  },
  dialogPaperScrollPaper: {
    maxHeight: 'none',
  },
  dialogContent: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})
type FormDialogProps = {
  classes: any
  open: boolean
  onClose: (...args: any[]) => any
  headline: string
  loading: boolean
  onFormSubmit: (...args: any[]) => any
  content: JSX.Element
  actions: JSX.Element
  hideBackdrop: boolean
}
const FormDialog: React.SFC<FormDialogProps> = (props) => {
  const {
    classes,
    open,
    onClose,
    loading,
    headline,
    onFormSubmit,
    content,
    actions,
    hideBackdrop,
  } = props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{
        paper: classes.dialogPaper,
        paperScrollPaper: classes.dialogPaperScrollPaper,
      }}
      hideBackdrop={hideBackdrop ? hideBackdrop : false}
    >
      <DialogTitleWithCloseIcon
        title={headline}
        onClose={onClose}
        disabled={loading}
      />
      <DialogContent className={classes.dialogContent}>
        <form onSubmit={onFormSubmit}>
          <div>{content}</div>
          <Box width='100%' className={classes.actions}>
            {actions}
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default withStyles(styles, { withTheme: true })(FormDialog)
