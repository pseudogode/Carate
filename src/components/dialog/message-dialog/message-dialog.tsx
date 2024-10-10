import classes from './message-dialog.module.scss';
import { Dialog } from '../base-dialog/base-dialog';

export interface DialogProps {
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
  title: string;
  isOpen?: boolean;
  closeFn: () => void;
  className?: string;
  alert?: boolean;
}

export function MessageDialog({
  title,
  isOpen,
  closeFn,
  children,
}: DialogProps) {
  return (
    <Dialog isOpen={isOpen} title={title} closeFn={closeFn} 
>
      <div className={classes.content}>
        <p>{children}</p>
      </div>
    </Dialog>
  );
}
