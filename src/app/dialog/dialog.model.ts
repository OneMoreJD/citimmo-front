export interface DialogData {
    dialogType: string;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    autoCloseTimer?:number;
    hasCountdown?:boolean;
    countdownDuration?:number;
  }