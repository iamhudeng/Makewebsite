document.addEventListener("DOMContentLoaded", function () {
    const titleContainer = document.getElementById("titleishere");

    if (sessionStorage.getItem("cachedTitle")) {
        titleContainer.innerHTML = sessionStorage.getItem("cachedTitle");
    }

    fetch("uptitle.html")
        .then(response => response.text())
        .then(data => {
            titleContainer.innerHTML = data;
            sessionStorage.setItem("cachedTitle", data);

            // 모달 기능 추가
            const profileBtn = document.getElementById("profile-btn");
            const modal = document.getElementById("profile-modal");
            const closeModal = document.getElementById("close-modal");

            profileBtn.addEventListener("click", () => {
                modal.style.display = "flex";
            });

            closeModal.addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        })
        .catch(error => console.error("타이틀 로딩 오류:", error));
});
