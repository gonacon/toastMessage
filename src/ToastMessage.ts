class ToastMessage {
    private static instance: ToastMessage;
    private duration = 5000;
    private toastContainer: HTMLElement;
    private messageTimer: any;

    private constructor() {
        this.toastContainer = document.createElement('div');
        this.toastContainer.classList.add('toast-container');
        this.toastContainer.style.position = 'relative'; // 위치시킬 컨테이너 요소의 position 속성 설정
        document.body.appendChild(this.toastContainer);
        this.setStyle();
    }

    public static getInstance(): ToastMessage {
        if (!ToastMessage.instance) {
            ToastMessage.instance = new ToastMessage();
        }
        return ToastMessage.instance;
    }

    setStyle() {
        const toast = this.toastContainer;
        toast.classList.add('toast');
        toast.style.position = 'absolute'; // 토스트 메세지의 position 속성 설정
        toast.style.bottom = '30px'; // 중앙 하단에 위치시키기 위한 bottom 속성 설정
        toast.style.left = '50%'; // 가운데 정렬을 위한 left 속성 설정
        toast.style.transform = 'translateX(-50%)'; // 가운데 정렬을 위한 transform 속성 설정
        toast.style.padding = '10px 20px';
        toast.style.color = '#fff';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        toast.style.borderRadius = '5px';
        toast.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
        toast.style.zIndex = '9999';
        toast.style.fontSize = '24px';
    }

    showMessage(message: string, duration: number = this.duration) {
        let msg = message;
        if (typeof message === 'object') {
            msg = JSON.stringify(message);
        }
        this.toastContainer.textContent = msg;
        this.toastContainer.classList.add('active');
        this.toastContainer.style.opacity = '1';

        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
            this.messageTimer = null;
        }
        this.messageTimer = setTimeout(() => {
            this.toastContainer.classList.remove('active');
            this.toastContainer.style.opacity = '0';
        }, duration);
    }

    setDuration(time: number) {
        this.duration = time;
    }

    setFontSize(size: number) {
        this.toastContainer.style.fontSize = `${ size }px`;
    }
}

export default ToastMessage.getInstance();

