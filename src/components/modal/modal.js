const modalOpenBtns = document.querySelectorAll("[data-modal-link]");

modalOpenBtns.forEach((btn) => {
    btn.onclick = () => {
        const modal = document.querySelector(btn.getAttribute("data-modal-link"));
        const closeBtn = modal.querySelector(".close");
        modal.classList.add("active");
        disabledBody(true);
        modal.onclick = (e) => {
            if (e.target.classList.contains("modal")) {
                close();
            }
        };

        closeBtn.onclick = () => {
            close()
        }

        function close() {
            modal.classList.remove("active");
            disabledBody(false);
        }
    };
});