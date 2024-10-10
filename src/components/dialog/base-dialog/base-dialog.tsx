import cln from 'classnames';

import classes from './base-dialog.module.scss';

export interface DialogProps {
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
  title: string;
  isOpen?: boolean;
  closeFn: () => void;
  className?: string;
  alert?: boolean;
}

export function Dialog({
  closeOnOverlayClick,
  title,
  children,
  isOpen,
  closeFn,
  className,
  alert,
}: DialogProps) {
  return isOpen ? (
    <>
      <div
        className={classes.popupOverlay}
        onClick={closeOnOverlayClick ? undefined : closeFn}
      >
        <div
          autoFocus
          className={cln(classes.container, className, classes.popupContent)}
          onClick={undefined}
          onKeyDown={
            closeOnOverlayClick
              ? undefined
              : event => (event.key === 'Escape' ? closeFn() : null)
          }
        >
          <div className={classes.header}>
            <p className={cln(classes.title, alert ? classes.alert : '')}>
              {title}
            </p>
            <button className={classes.close} onClick={closeFn}>
              &times;
            </button>
          </div>

          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
