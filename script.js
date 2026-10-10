const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

let notes = [];

function render() {
  notesList.replaceChildren();

  notes.forEach((note) => {
    const noteItem = document.createElement("li");
    noteItem.classList.add(
      "note-card",
      `category-${note.category.toLowerCase()}`,
    );

    const content = document.createElement("div");
    content.classList.add("note-content");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const metadata = document.createElement("div");
    metadata.classList.add("note-meta");

    const category = document.createElement("span");
    category.classList.add("note-category");
    category.textContent = note.category;

    const date = document.createElement("time");
    date.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.type = "button";
    deleteButton.dataset.noteId = note.id;
    deleteButton.textContent = "Delete";

    metadata.append(category, date);
    content.append(text, metadata);
    noteItem.append(content, deleteButton);
    notesList.append(noteItem);
  });

  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }
}

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredText = noteInput.value;
  if (!enteredText.trim()) {
    errorMessage.textContent = "Please type a note first.";
    noteInput.focus();
    return;
  }

  if (enteredText.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    noteInput.focus();
    return;
  }

  notes.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text: enteredText.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString(),
  });

  errorMessage.textContent = "";
  render();
  noteForm.reset();
  noteInput.focus();
});

notesList.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const deleteButton = event.target.closest(".delete-button");
  if (!deleteButton) {
    return;
  }

  notes = notes.filter((note) => note.id !== deleteButton.dataset.noteId);
  render();
});

render();
