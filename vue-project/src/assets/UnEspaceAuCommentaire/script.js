document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("comment-form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageInput = document.getElementById("message");
    const commentList = document.getElementById("comment-list");
    const errorMessage = document.getElementById("error-message");

    let comments = [];
    document.querySelectorAll("#comment-list > div").forEach(div => {
        const name = div.querySelector("h3")?.textContent || "";
        const [firstName, ...lastNameArr] = name.split(" ");
        const lastName = lastNameArr.join(" ");
        const message = div.querySelector("p")?.textContent || "";
        comments.push({ firstName, lastName, message });
    });

    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.concat(savedComments);

    function renderComments() {
        commentList.innerHTML = "";
        comments.forEach((c, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex space-x-4 text-sm text-gray-500';
            const inner = document.createElement('div');
            inner.className = 'flex-1 py-10' + (index > 0 ? ' border-t border-gray-200' : '');
            const h3 = document.createElement('h3');
            h3.className = 'font-medium text-gray-900';
            h3.textContent = `${c.firstName} ${c.lastName}`;
            const prose = document.createElement('div');
            prose.className = 'prose prose-sm mt-4 max-w-none text-gray-500';
            const p = document.createElement('p');
            p.textContent = c.message;
            prose.appendChild(p);
            inner.appendChild(h3);
            inner.appendChild(prose);
            wrapper.appendChild(inner);
            commentList.appendChild(wrapper);
        });
    }

    renderComments();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const message = messageInput.value.trim();

        if (!firstName || !lastName || !message) {
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }

        const newComment = { firstName, lastName, message };
        comments.push(newComment);

        const userComments = comments.filter(c => !["Emily", "Hector", "Mark"].includes(c.firstName));
        localStorage.setItem("comments", JSON.stringify(userComments));

        renderComments();
        form.reset();
        messageInput.focus();
    });
});
