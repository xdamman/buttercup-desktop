import { remote } from 'electron';
import { default as swal } from 'sweetalert2';
import '../styles/lib/sweetalert.global';
import styles from '../styles/sweetalert';

const { dialog } = remote;
const currentWindow = remote.getCurrentWindow();

export function showConfirmDialog(message, fn) {
  const buttons = ['Yes', 'No'];
  dialog.showMessageBox(currentWindow, {message, buttons}, resp => {
    fn(resp);
  });
}

export function showPasswordDialog(preConfirm) {
  return swal({
    title: 'Master Password',
    input: 'password',
    showCancelButton: true,
    animation: false,
    customClass: styles.alert,
    confirmButtonClass: styles.confirm,
    confirmButtonText: 'Confirm',
    cancelButtonClass: styles.cancel,
    cancelButtonText: 'Nevermind',
    inputPlaceholder: 'Password',
    inputClass: styles.input,
    preConfirm
  });
}