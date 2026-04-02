const STORAGE_KEY = "gymflow-workout-planner";

const templates = {
  push: {
    name: "Push Day",
    focus: "חזה, כתפיים, טרייספס",
    notes: "חימום לכתפיים לפני האימון ומנוחה של 90 שניות בין סטים כבדים.",
    exercises: [
      createExercise("בנץ' פרס", "חזה", 4, "8-10", 60),
      createExercise("לחיצת כתפיים", "כתפיים", 4, "10", 24),
      createExercise("פשיטת מרפקים בכבל", "טרייספס", 3, "12-15", 18),
    ],
  },
  pull: {
    name: "Pull Day",
    focus: "גב, בייספס",
    notes: "להתרכז בטווח מלא ולשמור על גב יציב.",
    exercises: [
      createExercise("מתח / פולי עליון", "גב", 4, "8-12", 45),
      createExercise("חתירה עם מוט", "גב", 4, "8-10", 50),
      createExercise("כפיפת מרפקים עם דאמבלים", "בייספס", 3, "12", 12),
    ],
  },
  legs: {
    name: "Leg Day",
    focus: "רגליים וישבן",
    notes: "להשקיע בחימום מפרקים וברכיים לפני הסטים הכבדים.",
    exercises: [
      createExercise("סקוואט", "רגליים", 4, "6-8", 80),
      createExercise("לחיצת רגליים", "רגליים", 4, "10-12", 140),
      createExercise("דדליפט רומני", "המסטרינג", 3, "8-10", 70),
    ],
  },
};

const state = loadState();

const elements = {
  planName: document.querySelector("#planName"),
  workoutTabs: document.querySelector("#workoutTabs"),
  workoutCount: document.querySelector("#workoutCount"),
  exerciseCount: document.querySelector("#exerciseCount"),
  activeWorkoutTitle: document.querySelector("#activeWorkoutTitle"),
  activeWorkoutMeta: document.querySelector("#activeWorkoutMeta"),
  emptyState: document.querySelector("#emptyState"),
  workoutEditor: document.querySelector("#workoutEditor"),
  workoutName: document.querySelector("#workoutName"),
  workoutFocus: document.querySelector("#workoutFocus"),
  workoutNotes: document.querySelector("#workoutNotes"),
  deleteWorkoutBtn: document.querySelector("#deleteWorkoutBtn"),
  addWorkoutBtn: document.querySelector("#addWorkoutBtn"),
  addExerciseBtn: document.querySelector("#addExerciseBtn"),
  saveWorkoutBtn: document.querySelector("#saveWorkoutBtn"),
  exerciseList: document.querySelector("#exerciseList"),
  exerciseSummary: document.querySelector("#exerciseSummary"),
  templateButtons: document.querySelectorAll(".template-btn"),
  exerciseTemplate: document.querySelector("#exerciseTemplate"),
};

bindEvents();
render();

function bindEvents() {
  elements.planName.addEventListener("input", (event) => {
    state.planName = event.target.value;
    persist();
    renderStats();
  });

  elements.addWorkoutBtn.addEventListener("click", () => {
    const workout = createWorkout(`אימון ${state.workouts.length + 1}`);
    state.workouts.push(workout);
    state.activeWorkoutId = workout.id;
    persist();
    render();
  });

  elements.addExerciseBtn.addEventListener("click", () => {
    const workout = getActiveWorkout();
    if (!workout) return;

    workout.exercises.push(createExercise("", "", 3, "10", ""));
    persist();
    renderEditor();
    renderTabs();
    renderStats();
  });

  elements.saveWorkoutBtn.addEventListener("click", () => {
    persist();
    pulseButton(elements.saveWorkoutBtn, "נשמר");
  });

  elements.workoutName.addEventListener("input", (event) => {
    const workout = getActiveWorkout();
    if (!workout) return;
    workout.name = event.target.value;
    persist();
    renderTabs();
    renderHero();
  });

  elements.workoutFocus.addEventListener("input", (event) => {
    const workout = getActiveWorkout();
    if (!workout) return;
    workout.focus = event.target.value;
    persist();
    renderTabs();
    renderHero();
  });

  elements.workoutNotes.addEventListener("input", (event) => {
    const workout = getActiveWorkout();
    if (!workout) return;
    workout.notes = event.target.value;
    persist();
  });

  elements.deleteWorkoutBtn.addEventListener("click", () => {
    const workout = getActiveWorkout();
    if (!workout) return;

    state.workouts = state.workouts.filter((item) => item.id !== workout.id);
    state.activeWorkoutId = state.workouts[0]?.id ?? null;
    persist();
    render();
  });

  elements.templateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const template = templates[button.dataset.template];
      if (!template) return;

      const workout = {
        id: crypto.randomUUID(),
        name: template.name,
        focus: template.focus,
        notes: template.notes,
        exercises: template.exercises.map((exercise) => ({
          ...exercise,
          id: crypto.randomUUID(),
          history: [],
        })),
      };

      state.workouts.push(workout);
      state.activeWorkoutId = workout.id;
      persist();
      render();
    });
  });
}

function render() {
  renderStats();
  renderTabs();
  renderHero();
  renderEditor();
}

function renderStats() {
  elements.planName.value = state.planName;
  elements.workoutCount.textContent = state.workouts.length;
  elements.exerciseCount.textContent = state.workouts.reduce((sum, workout) => sum + workout.exercises.length, 0);
}

function renderTabs() {
  elements.workoutTabs.innerHTML = "";

  state.workouts.forEach((workout) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `workout-tab ${workout.id === state.activeWorkoutId ? "active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(workout.name || "אימון ללא שם")}</strong>
      <small>${escapeHtml(workout.focus || "ללא מיקוד")} · ${workout.exercises.length} תרגילים</small>
    `;

    button.addEventListener("click", () => {
      state.activeWorkoutId = workout.id;
      persist();
      render();
    });

    elements.workoutTabs.appendChild(button);
  });
}

function renderHero() {
  const workout = getActiveWorkout();
  if (!workout) {
    elements.activeWorkoutTitle.textContent = "בחר אימון כדי להתחיל";
    elements.activeWorkoutMeta.textContent = "אפשר להוסיף תרגילים, לעדכן משקלים, ולשמור היסטוריית אימון לכל תרגיל.";
    return;
  }

  elements.activeWorkoutTitle.textContent = workout.name || "אימון ללא שם";
  elements.activeWorkoutMeta.textContent = `${workout.focus || "ללא מיקוד"} · ${workout.exercises.length} תרגילים באימון`;
}

function renderEditor() {
  const workout = getActiveWorkout();
  const hasWorkout = Boolean(workout);

  elements.emptyState.classList.toggle("hidden", hasWorkout);
  elements.workoutEditor.classList.toggle("hidden", !hasWorkout);

  if (!workout) {
    return;
  }

  elements.workoutName.value = workout.name || "";
  elements.workoutFocus.value = workout.focus || "";
  elements.workoutNotes.value = workout.notes || "";
  elements.exerciseSummary.textContent = `${workout.exercises.length} תרגילים`;

  elements.exerciseList.innerHTML = "";

  workout.exercises.forEach((exercise, index) => {
    const fragment = elements.exerciseTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".exercise-card");

    fragment.querySelector(".exercise-index").textContent = `תרגיל ${index + 1}`;

    fillInput(fragment, ".exercise-name", exercise.name, (value) => {
      exercise.name = value;
      persist();
      renderTabs();
    });
    fillInput(fragment, ".exercise-group", exercise.group, (value) => {
      exercise.group = value;
      persist();
    });
    fillInput(fragment, ".exercise-sets", exercise.sets, (value) => {
      exercise.sets = value;
      persist();
    });
    fillInput(fragment, ".exercise-reps", exercise.reps, (value) => {
      exercise.reps = value;
      persist();
    });
    fillInput(fragment, ".exercise-weight", exercise.weight, (value) => {
      exercise.weight = value;
      persist();
    });
    fillInput(fragment, ".exercise-notes", exercise.notes, (value) => {
      exercise.notes = value;
      persist();
    });

    const lastSession = exercise.history[0];
    const historyPill = fragment.querySelector(".history-pill");
    historyPill.textContent = lastSession
      ? `אימון אחרון: ${formatDate(lastSession.date)} · ${lastSession.weight || "-"} ק"ג · ${lastSession.reps || "-"}`
      : "עדיין לא נשמר ביצוע לתרגיל הזה.";

    const sessionWeight = fragment.querySelector(".session-weight");
    const sessionReps = fragment.querySelector(".session-reps");
    const sessionNotes = fragment.querySelector(".session-notes");

    sessionWeight.value = exercise.weight ?? "";
    sessionReps.value = exercise.reps ?? "";
    sessionNotes.value = "";

    fragment.querySelector(".log-session-btn").addEventListener("click", () => {
      exercise.weight = sessionWeight.value;
      exercise.history.unshift({
        date: new Date().toISOString(),
        weight: sessionWeight.value,
        reps: sessionReps.value,
        notes: sessionNotes.value,
      });
      exercise.history = exercise.history.slice(0, 5);
      persist();
      renderEditor();
      renderStats();
    });

    fragment.querySelector(".delete-exercise-btn").addEventListener("click", () => {
      workout.exercises = workout.exercises.filter((item) => item.id !== exercise.id);
      persist();
      renderEditor();
      renderTabs();
      renderStats();
    });

    elements.exerciseList.appendChild(card);
  });
}

function fillInput(fragment, selector, value, onInput) {
  const input = fragment.querySelector(selector);
  input.value = value ?? "";
  input.addEventListener("input", (event) => {
    onInput(event.target.value);
    renderStats();
  });
}

function loadState() {
  const rawState = localStorage.getItem(STORAGE_KEY);
  if (!rawState) {
    const workout = createWorkout("אימון עליון");
    workout.focus = "חזה, גב וכתפיים";
    workout.exercises = [
      createExercise("בנץ' פרס", "חזה", 4, "8-10", 60),
      createExercise("חתירה במכונה", "גב", 4, "10", 55),
    ];

    return {
      planName: "התוכנית שלי",
      activeWorkoutId: workout.id,
      workouts: [workout],
    };
  }

  try {
    const parsed = JSON.parse(rawState);
    return {
      planName: parsed.planName || "התוכנית שלי",
      activeWorkoutId: parsed.activeWorkoutId || parsed.workouts?.[0]?.id || null,
      workouts: Array.isArray(parsed.workouts) ? parsed.workouts : [],
    };
  } catch {
    return {
      planName: "התוכנית שלי",
      activeWorkoutId: null,
      workouts: [],
    };
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveWorkout() {
  return state.workouts.find((workout) => workout.id === state.activeWorkoutId) || null;
}

function createWorkout(name) {
  return {
    id: crypto.randomUUID(),
    name,
    focus: "",
    notes: "",
    exercises: [],
  };
}

function createExercise(name, group, sets, reps, weight) {
  return {
    id: crypto.randomUUID(),
    name,
    group,
    sets,
    reps,
    weight,
    notes: "",
    history: [],
  };
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));
}

function pulseButton(button, text) {
  const original = button.textContent;
  button.textContent = text;
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
