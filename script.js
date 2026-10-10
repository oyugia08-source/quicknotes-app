const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

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
    deleteButton.textContent = "Delete";

    metadata.append(category, date);
    content.append(text, metadata);
    noteItem.append(content, deleteButton);
    notesList.append(noteItem);
  });
}

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = noteInput.value.trim();
  if (!text) {
    return;
  }

  notes.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString(),
  });

  render();
  noteForm.reset();
  noteInput.focus();
});

render();
