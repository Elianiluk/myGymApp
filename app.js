const STORAGE_KEY = "gymflow-workout-planner";

const EXERCISE_LIBRARY = [
  presetExercise("בנץ' פרס", "חזה", "מוט", "בינוני", 4, "8-10", 60, 90, "לחיצה קלאסית לבניית חזה", "https://www.youtube.com/results?search_query=bench+press+form"),
  presetExercise("לחיצת חזה בדאמבלים", "חזה", "דאמבלים", "מתחיל", 4, "10-12", 22, 75, "טווח תנועה גדול יותר", "https://www.youtube.com/results?search_query=dumbbell+bench+press+form"),
  presetExercise("פרפר במכונה", "חזה", "מכונה", "מתחיל", 3, "12-15", 35, 60, "פאמפ וסיום לחזה", "https://www.youtube.com/results?search_query=pec+deck+fly+form"),
  presetExercise("לחיצת חזה בשיפוע חיובי", "חזה", "מוט", "בינוני", 4, "8-10", 50, 90, "דגש על חזה עליון", "https://www.youtube.com/results?search_query=incline+bench+press+form"),
  presetExercise("לחיצת חזה בשיפוע שלילי", "חזה", "מוט", "בינוני", 3, "8-10", 55, 90, "שליטה בירידה מלאה", "https://www.youtube.com/results?search_query=decline+bench+press+form"),
  presetExercise("קרוס אובר בכבלים", "חזה", "כבל", "מתחיל", 3, "12-15", 15, 45, "סחיטה מלאה בקו האמצע", "https://www.youtube.com/results?search_query=cable+crossover+form"),
  presetExercise("פוש אפ", "חזה", "משקל גוף", "מתחיל", 3, "12-20", 0, 45, "מעולה לחימום או סיום", "https://www.youtube.com/results?search_query=push+up+form"),
  presetExercise("חתירה עם מוט", "גב", "מוט", "בינוני", 4, "8-10", 50, 90, "שמור גב יציב ובטן אסופה", "https://www.youtube.com/results?search_query=barbell+row+form"),
  presetExercise("פולי עליון", "גב", "מכונה", "מתחיל", 4, "10-12", 45, 75, "משוך למרכז החזה", "https://www.youtube.com/results?search_query=lat+pulldown+form"),
  presetExercise("מתח", "גב", "משקל גוף", "מתקדם", 4, "6-10", 0, 90, "שליטה מלאה בלי תנופה", "https://www.youtube.com/results?search_query=pull+up+form"),
  presetExercise("חתירה בדאמבל יד אחת", "גב", "דאמבלים", "מתחיל", 4, "10-12", 26, 60, "משיכה לכיוון האגן", "https://www.youtube.com/results?search_query=one+arm+dumbbell+row+form"),
  presetExercise("חתירה בישיבה בכבל", "גב", "כבל", "מתחיל", 4, "10-12", 40, 60, "שמור חזה פתוח", "https://www.youtube.com/results?search_query=seated+cable+row+form"),
  presetExercise("טי בר רואו", "גב", "מוט", "בינוני", 4, "8-10", 45, 75, "מסלול משיכה חזק ועבה", "https://www.youtube.com/results?search_query=t+bar+row+form"),
  presetExercise("פולאובר בכבל", "גב", "כבל", "מתחיל", 3, "12-15", 20, 45, "דגש על לטס", "https://www.youtube.com/results?search_query=straight+arm+pulldown+form"),
  presetExercise("דדליפט", "גב", "מוט", "מתקדם", 4, "4-6", 120, 150, "שמור גב ניטרלי ומתח מלא", "https://www.youtube.com/results?search_query=deadlift+form"),
  presetExercise("לחיצת כתפיים", "כתפיים", "דאמבלים", "בינוני", 4, "8-10", 24, 75, "שמור ליבה חזקה", "https://www.youtube.com/results?search_query=shoulder+press+form"),
  presetExercise("הרחקת כתפיים", "כתפיים", "דאמבלים", "מתחיל", 3, "12-15", 8, 45, "מרפקים מעט כפופים", "https://www.youtube.com/results?search_query=lateral+raise+form"),
  presetExercise("פייס פול", "כתפיים", "כבל", "מתחיל", 3, "12-15", 20, 45, "אחורי כתף ויציבה", "https://www.youtube.com/results?search_query=face+pull+form"),
  presetExercise("לחיצת ארנולד", "כתפיים", "דאמבלים", "בינוני", 4, "8-10", 18, 60, "סיבוב חלק לאורך התנועה", "https://www.youtube.com/results?search_query=arnold+press+form"),
  presetExercise("הרחקה קדמית", "כתפיים", "דאמבלים", "מתחיל", 3, "12-15", 8, 45, "לא להרים מעל גובה הכתף", "https://www.youtube.com/results?search_query=front+raise+form"),
  presetExercise("הרחקת כתף במכונה", "כתפיים", "מכונה", "מתחיל", 3, "12-15", 25, 45, "קצב קבוע לכל הסט", "https://www.youtube.com/results?search_query=lateral+raise+machine+form"),
  presetExercise("רברס פק דק", "כתפיים", "מכונה", "מתחיל", 3, "12-15", 25, 45, "אחורי כתף ויציבה", "https://www.youtube.com/results?search_query=reverse+pec+deck+form"),
  presetExercise("סקוואט", "רגליים", "מוט", "בינוני", 4, "6-8", 80, 120, "עומק נשלט ועמוד שדרה ניטרלי", "https://www.youtube.com/results?search_query=barbell+squat+form"),
  presetExercise("לחיצת רגליים", "רגליים", "מכונה", "מתחיל", 4, "10-12", 140, 90, "שליטה בירידה ולא לנעול ברכיים", "https://www.youtube.com/results?search_query=leg+press+form"),
  presetExercise("דדליפט רומני", "המסטרינג", "מוט", "בינוני", 4, "8-10", 70, 105, "דחוף אגן לאחור ושמור גב ארוך", "https://www.youtube.com/results?search_query=romanian+deadlift+form"),
  presetExercise("מכרעיים", "רגליים", "דאמבלים", "בינוני", 3, "10 כל רגל", 16, 60, "צעד ארוך וירידה נשלטת", "https://www.youtube.com/results?search_query=lunge+form"),
  presetExercise("סקוואט קדמי", "רגליים", "מוט", "מתקדם", 4, "6-8", 60, 120, "מרפקים גבוהים וחזה פתוח", "https://www.youtube.com/results?search_query=front+squat+form"),
  presetExercise("בולגרי ספליט סקוואט", "רגליים", "דאמבלים", "בינוני", 3, "10 כל רגל", 14, 60, "איזון וירידה עמוקה", "https://www.youtube.com/results?search_query=bulgarian+split+squat+form"),
  presetExercise("פשיטת ברכיים", "רגליים", "מכונה", "מתחיל", 3, "12-15", 35, 45, "סחיטה בקצה העליון", "https://www.youtube.com/results?search_query=leg+extension+form"),
  presetExercise("כפיפת ברכיים", "המסטרינג", "מכונה", "מתחיל", 3, "12-15", 30, 45, "שליטה מלאה בהורדה", "https://www.youtube.com/results?search_query=leg+curl+form"),
  presetExercise("תאומים בעמידה", "תאומים", "מכונה", "מתחיל", 4, "15-20", 50, 30, "ירידה מלאה ומתיחה למטה", "https://www.youtube.com/results?search_query=standing+calf+raise+form"),
  presetExercise("תאומים בישיבה", "תאומים", "מכונה", "מתחיל", 4, "15-20", 35, 30, "דגש על סולאוס", "https://www.youtube.com/results?search_query=seated+calf+raise+form"),
  presetExercise("כפיפת מרפקים", "בייספס", "דאמבלים", "מתחיל", 3, "10-12", 12, 45, "בלי תנופה מהגב", "https://www.youtube.com/results?search_query=biceps+curl+form"),
  presetExercise("האמר קרל", "בייספס", "דאמבלים", "מתחיל", 3, "12", 14, 45, "אחיזה ניטרלית לכל התנועה", "https://www.youtube.com/results?search_query=hammer+curl+form"),
  presetExercise("כפיפת מרפקים עם מוט", "בייספס", "מוט", "בינוני", 3, "8-10", 25, 60, "מרפקים יציבים לצדדים", "https://www.youtube.com/results?search_query=barbell+biceps+curl+form"),
  presetExercise("כפיפת מרפקים בכבל", "בייספס", "כבל", "מתחיל", 3, "12-15", 20, 45, "מתח רציף לאורך כל התנועה", "https://www.youtube.com/results?search_query=cable+biceps+curl+form"),
  presetExercise("פריצ'ר קרל", "בייספס", "מוט EZ", "בינוני", 3, "10-12", 20, 45, "דגש על תחתית הבייספס", "https://www.youtube.com/results?search_query=preacher+curl+form"),
  presetExercise("פשיטת מרפקים בכבל", "טרייספס", "כבל", "מתחיל", 3, "12-15", 18, 45, "מרפקים צמודים לגוף", "https://www.youtube.com/results?search_query=triceps+pushdown+form"),
  presetExercise("סקול קראשר", "טרייספס", "מוט EZ", "בינוני", 3, "10-12", 25, 60, "שליטה בירידה ומרפקים קבועים", "https://www.youtube.com/results?search_query=skullcrusher+form"),
  presetExercise("לחיצה צרפתית מעל הראש", "טרייספס", "דאמבלים", "בינוני", 3, "10-12", 18, 45, "פתיחה טובה לראש הארוך", "https://www.youtube.com/results?search_query=overhead+triceps+extension+form"),
  presetExercise("מקבילים", "טרייספס", "משקל גוף", "בינוני", 3, "8-12", 0, 60, "הטיה קלה קדימה אם רוצים גם חזה", "https://www.youtube.com/results?search_query=dips+form"),
  presetExercise("היפ תראסט", "ישבן", "מוט", "בינוני", 4, "8-12", 90, 90, "עצירה קצרה למעלה", "https://www.youtube.com/results?search_query=hip+thrust+form")
  ,
  presetExercise("גלוט ברידג'", "ישבן", "מוט", "מתחיל", 4, "10-12", 60, 60, "סחיטה מלאה בחלק העליון", "https://www.youtube.com/results?search_query=glute+bridge+form"),
  presetExercise("קיקבק בכבל", "ישבן", "כבל", "מתחיל", 3, "12-15", 10, 45, "בלי קשת מוגזמת בגב", "https://www.youtube.com/results?search_query=cable+glute+kickback+form"),
  presetExercise("כפיפות בטן בכבל", "בטן", "כבל", "מתחיל", 3, "12-15", 20, 30, "סגירה מבוקרת של הבטן", "https://www.youtube.com/results?search_query=cable+crunch+form"),
  presetExercise("פלאנק", "בטן", "משקל גוף", "מתחיל", 3, "30-60 שניות", 0, 30, "קו גוף ישר וליבה אסופה", "https://www.youtube.com/results?search_query=plank+form"),
  presetExercise("הרמות רגליים בתלייה", "בטן", "משקל גוף", "בינוני", 3, "10-15", 0, 45, "להימנע מתנופה", "https://www.youtube.com/results?search_query=hanging+leg+raise+form"),
  presetExercise("ווד צ'ופ בכבל", "בטן", "כבל", "בינוני", 3, "12 כל צד", 15, 30, "רוטציה נשלטת מהליבה", "https://www.youtube.com/results?search_query=cable+woodchopper+form"),
  presetExercise("שראג", "טרפזים", "דאמבלים", "מתחיל", 3, "12-15", 26, 45, "הרמה ישרה של הכתפיים למעלה", "https://www.youtube.com/results?search_query=dumbbell+shrug+form"),
  presetExercise("פארמר ווק", "אחיזה", "דאמבלים", "בינוני", 3, "30-40 מטר", 30, 60, "הליכה יציבה עם ליבה חזקה", "https://www.youtube.com/results?search_query=farmer+walk+form")
];

const today = new Date();
const state = loadState();

const elements = {
  planName: document.querySelector("#planName"),
  workoutTabs: document.querySelector("#workoutTabs"),
  workoutCount: document.querySelector("#workoutCount"),
  exerciseCount: document.querySelector("#exerciseCount"),
  sessionCount: document.querySelector("#sessionCount"),
  libraryCount: document.querySelector("#libraryCount"),
  librarySearch: document.querySelector("#librarySearch"),
  libraryList: document.querySelector("#libraryList"),
  exercisePickerModal: document.querySelector("#exercisePickerModal"),
  closeExercisePickerBtn: document.querySelector("#closeExercisePickerBtn"),
  addBlankExerciseBtn: document.querySelector("#addBlankExerciseBtn"),
  activeWorkoutTitle: document.querySelector("#activeWorkoutTitle"),
  activeWorkoutMeta: document.querySelector("#activeWorkoutMeta"),
  showWorkoutViewBtn: document.querySelector("#showWorkoutViewBtn"),
  showNutritionViewBtn: document.querySelector("#showNutritionViewBtn"),
  workoutView: document.querySelector("#workoutView"),
  nutritionView: document.querySelector("#nutritionView"),
  prevMonthBtn: document.querySelector("#prevMonthBtn"),
  nextMonthBtn: document.querySelector("#nextMonthBtn"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarDays: document.querySelector("#calendarDays"),
  nutritionSelectedDate: document.querySelector("#nutritionSelectedDate"),
  nutritionStatus: document.querySelector("#nutritionStatus"),
  dailyCaloriesValue: document.querySelector("#dailyCaloriesValue"),
  dailyProteinValue: document.querySelector("#dailyProteinValue"),
  foodName: document.querySelector("#foodName"),
  foodAmount: document.querySelector("#foodAmount"),
  foodCalories: document.querySelector("#foodCalories"),
  foodProtein: document.querySelector("#foodProtein"),
  foodList: document.querySelector("#foodList"),
  dailyNutritionNotes: document.querySelector("#dailyNutritionNotes"),
  saveNutritionBtn: document.querySelector("#saveNutritionBtn"),
  addFoodBtn: document.querySelector("#addFoodBtn"),
  clearNutritionBtn: document.querySelector("#clearNutritionBtn"),
  emptyState: document.querySelector("#emptyState"),
  workoutEditor: document.querySelector("#workoutEditor"),
  workoutName: document.querySelector("#workoutName"),
  workoutFocus: document.querySelector("#workoutFocus"),
  workoutGoal: document.querySelector("#workoutGoal"),
  workoutDuration: document.querySelector("#workoutDuration"),
  workoutNotes: document.querySelector("#workoutNotes"),
  detailChips: document.querySelector("#detailChips"),
  deleteWorkoutBtn: document.querySelector("#deleteWorkoutBtn"),
  addWorkoutBtn: document.querySelector("#addWorkoutBtn"),
  addExerciseBtn: document.querySelector("#addExerciseBtn"),
  saveWorkoutBtn: document.querySelector("#saveWorkoutBtn"),
  exerciseList: document.querySelector("#exerciseList"),
  exerciseSummary: document.querySelector("#exerciseSummary"),
  exerciseTemplate: document.querySelector("#exerciseTemplate")
};

bindEvents();
render();

function bindEvents() {
  elements.planName.addEventListener("input", (event) => {
    state.planName = event.target.value;
    persist();
    renderStats();
  });
  elements.librarySearch.addEventListener("input", renderLibrary);
  elements.closeExercisePickerBtn.addEventListener("click", closeExercisePicker);
  elements.addBlankExerciseBtn.addEventListener("click", () => {
    const createdExercise = createExercise({});
    ensureActiveWorkout().exercises.push(createdExercise);
    state.editingExerciseId = createdExercise.id;
    persist();
    closeExercisePicker();
    render();
  });
  elements.showWorkoutViewBtn.addEventListener("click", () => setCurrentView("workouts"));
  elements.showNutritionViewBtn.addEventListener("click", () => setCurrentView("nutrition"));
  elements.prevMonthBtn.addEventListener("click", () => {
    state.calendarMonth = shiftMonth(state.calendarMonth, -1);
    persist();
    renderCalendar();
  });
  elements.nextMonthBtn.addEventListener("click", () => {
    state.calendarMonth = shiftMonth(state.calendarMonth, 1);
    persist();
    renderCalendar();
  });
  elements.addFoodBtn.addEventListener("click", addFoodForSelectedDate);
  elements.saveNutritionBtn.addEventListener("click", saveNutritionForSelectedDate);
  elements.clearNutritionBtn.addEventListener("click", clearNutritionForSelectedDate);
  elements.addWorkoutBtn.addEventListener("click", () => {
    const workout = createWorkout(`אימון ${state.workouts.length + 1}`);
    state.workouts.push(workout);
    state.activeWorkoutId = workout.id;
    persist();
    render();
  });
  elements.addExerciseBtn.addEventListener("click", () => {
    ensureActiveWorkout();
    openExercisePicker();
  });
  elements.saveWorkoutBtn.addEventListener("click", () => {
    persist();
    pulseButton(elements.saveWorkoutBtn, "נשמר");
  });
  elements.workoutName.addEventListener("input", (event) => updateWorkoutField("name", event.target.value));
  elements.workoutFocus.addEventListener("input", (event) => updateWorkoutField("focus", event.target.value));
  elements.workoutGoal.addEventListener("input", (event) => updateWorkoutField("goal", event.target.value));
  elements.workoutDuration.addEventListener("input", (event) => updateWorkoutField("duration", event.target.value));
  elements.workoutNotes.addEventListener("input", (event) => updateWorkoutField("notes", event.target.value));
  elements.deleteWorkoutBtn.addEventListener("click", () => {
    const workout = getActiveWorkout();
    if (!workout) return;
    state.workouts = state.workouts.filter((item) => item.id !== workout.id);
    state.activeWorkoutId = state.workouts[0]?.id ?? null;
    persist();
    render();
  });
}

function render() {
  renderCurrentView();
  renderStats();
  renderTabs();
  renderLibrary();
  renderHero();
  renderCalendar();
  renderNutritionForm();
  renderEditor();
}

function renderCurrentView() {
  const isWorkoutView = state.currentView !== "nutrition";
  elements.workoutView.classList.toggle("hidden", !isWorkoutView);
  elements.nutritionView.classList.toggle("hidden", isWorkoutView);
  elements.nutritionView.classList.toggle("full-view", !isWorkoutView);
  document.querySelector(".sidebar").classList.toggle("hidden", !isWorkoutView);
  elements.showWorkoutViewBtn.classList.toggle("active", isWorkoutView);
  elements.showNutritionViewBtn.classList.toggle("active", !isWorkoutView);
}

function setCurrentView(view) {
  state.currentView = view;
  persist();
  renderCurrentView();
}

function renderStats() {
  elements.planName.value = state.planName;
  elements.workoutCount.textContent = state.workouts.length;
  elements.exerciseCount.textContent = state.workouts.reduce((sum, workout) => sum + workout.exercises.length, 0);
  elements.sessionCount.textContent = state.workouts.reduce((sum, workout) => sum + workout.exercises.reduce((inner, exercise) => inner + exercise.history.length, 0), 0);
}

function renderTabs() {
  elements.workoutTabs.innerHTML = "";
  state.workouts.forEach((workout) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `workout-tab ${workout.id === state.activeWorkoutId ? "active" : ""}`;
    button.innerHTML = `<strong>${escapeHtml(workout.name || "אימון ללא שם")}</strong><small>${escapeHtml(workout.focus || "ללא מיקוד")} · ${workout.exercises.length} תרגילים · ${workout.duration || "-"} דק'</small>`;
    button.addEventListener("click", () => {
      state.activeWorkoutId = workout.id;
      persist();
      render();
    });
    elements.workoutTabs.appendChild(button);
  });
}

function renderLibrary() {
  const query = elements.librarySearch.value.trim().toLowerCase();
  const filtered = EXERCISE_LIBRARY.filter((exercise) =>
    [exercise.name, exercise.group, exercise.equipment, exercise.notes].some((value) => String(value).toLowerCase().includes(query))
  );
  elements.libraryCount.textContent = `${filtered.length} תרגילים`;
  elements.libraryList.innerHTML = "";
  filtered.forEach((exercise) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "library-item";
    button.innerHTML = `<strong>${escapeHtml(exercise.name)}</strong><small>${escapeHtml(exercise.group)} · ${escapeHtml(exercise.equipment)} · ${escapeHtml(exercise.difficulty)}</small>`;
    button.addEventListener("click", () => {
      const createdExercise = createExercise(exercise);
      ensureActiveWorkout().exercises.push(createdExercise);
      state.editingExerciseId = createdExercise.id;
      persist();
      closeExercisePicker();
      render();
    });
    elements.libraryList.appendChild(button);
  });
}

function openExercisePicker() {
  elements.exercisePickerModal.classList.remove("hidden");
  renderLibrary();
  elements.librarySearch.focus();
}

function closeExercisePicker() {
  elements.exercisePickerModal.classList.add("hidden");
  elements.librarySearch.value = "";
}

function renderHero() {
  const workout = getActiveWorkout();
  if (!workout) {
    elements.activeWorkoutTitle.textContent = "בחר אימון כדי להתחיל";
    elements.activeWorkoutMeta.textContent = "כאן תוכל לערוך את האימון, לשנות תרגילים, ולהוסיף תמונה וקישור וידאו לכל תרגיל.";
    return;
  }
  elements.activeWorkoutTitle.textContent = workout.name || "אימון ללא שם";
  elements.activeWorkoutMeta.textContent = `${workout.focus || "ללא מיקוד"} · ${workout.exercises.length} תרגילים · ${workout.goal || "ללא מטרה מוגדרת"}`;
}

function renderCalendar() {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - firstDay.getDay());
  elements.calendarMonthLabel.textContent = new Intl.DateTimeFormat("he-IL", {
    month: "long",
    year: "numeric",
  }).format(firstDay);
  elements.calendarDays.innerHTML = "";

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = formatIsoDate(date);
    const entry = state.nutrition[iso];
    const totals = getNutritionTotals(entry);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    if (date.getMonth() !== firstDay.getMonth()) button.classList.add("muted");
    if (iso === state.selectedNutritionDate) button.classList.add("selected");
    if (iso === formatIsoDate(today)) button.classList.add("today");
    if (entry && hasNutritionData(entry)) button.classList.add("has-data");
    button.innerHTML = `
      <span class="calendar-day-number">${date.getDate()}</span>
      <div class="calendar-day-meta">
        <span>${totals.calories ? `${totals.calories} קק"ל` : "ללא קלוריות"}</span>
        <span>${totals.protein ? `${totals.protein} גרם חלבון` : "ללא חלבון"}</span>
      </div>
    `;
    button.addEventListener("click", () => {
      state.selectedNutritionDate = iso;
      persist();
      renderCalendar();
      renderNutritionForm();
    });
    elements.calendarDays.appendChild(button);
  }
}

function renderNutritionForm() {
  const iso = state.selectedNutritionDate;
  const entry = state.nutrition[iso] || { items: [], notes: "" };
  const totals = getNutritionTotals(entry);
  elements.nutritionSelectedDate.textContent = `מעקב יומי · ${formatHumanDate(iso)}`;
  elements.nutritionStatus.textContent = `${totals.calories} קק"ל`;
  elements.dailyCaloriesValue.textContent = totals.calories;
  elements.dailyProteinValue.textContent = totals.protein;
  elements.foodName.value = "";
  elements.foodAmount.value = "";
  elements.foodCalories.value = "";
  elements.foodProtein.value = "";
  elements.dailyNutritionNotes.value = entry.notes || "";
  renderFoodList(entry.items || []);
}

function saveNutritionForSelectedDate() {
  const entry = ensureNutritionEntry(state.selectedNutritionDate);
  entry.notes = elements.dailyNutritionNotes.value;
  persist();
  renderCalendar();
  renderNutritionForm();
  pulseButton(elements.saveNutritionBtn, "נשמר");
}

function clearNutritionForSelectedDate() {
  delete state.nutrition[state.selectedNutritionDate];
  persist();
  renderCalendar();
  renderNutritionForm();
}

function addFoodForSelectedDate() {
  if (!elements.foodName.value.trim()) return;
  const entry = ensureNutritionEntry(state.selectedNutritionDate);
  entry.items.push({
    id: crypto.randomUUID(),
    name: elements.foodName.value.trim(),
    amount: elements.foodAmount.value.trim(),
    calories: Number(elements.foodCalories.value || 0),
    protein: Number(elements.foodProtein.value || 0),
  });
  persist();
  renderCalendar();
  renderNutritionForm();
}

function renderFoodList(items) {
  elements.foodList.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "food-item";
    empty.innerHTML = "<strong>עדיין לא הוספת אוכל</strong><small>הוסף פריטי אוכל כדי שהקלוריות והחלבון יחושבו לבד.</small>";
    elements.foodList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "food-item";
    card.innerHTML = `
      <div class="food-item-top">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(item.amount || "ללא כמות")}</small>
        </div>
        <button class="icon-btn food-delete-btn" type="button">מחק</button>
      </div>
      <small>${item.calories || 0} קק"ל · ${item.protein || 0} גרם חלבון</small>
    `;
    card.querySelector(".food-delete-btn").addEventListener("click", () => {
      const entry = ensureNutritionEntry(state.selectedNutritionDate);
      entry.items = entry.items.filter((entryItem) => entryItem.id !== item.id);
      if (!entry.items.length && !entry.notes) {
        delete state.nutrition[state.selectedNutritionDate];
      }
      persist();
      renderCalendar();
      renderNutritionForm();
    });
    elements.foodList.appendChild(card);
  });
}

function ensureNutritionEntry(dateKey) {
  if (!state.nutrition[dateKey]) {
    state.nutrition[dateKey] = { items: [], notes: "" };
  }
  if (!Array.isArray(state.nutrition[dateKey].items)) {
    state.nutrition[dateKey].items = [];
  }
  return state.nutrition[dateKey];
}

function getNutritionTotals(entry) {
  const items = Array.isArray(entry?.items) ? entry.items : [];
  return items.reduce(
    (totals, item) => ({
      calories: totals.calories + Number(item.calories || 0),
      protein: totals.protein + Number(item.protein || 0),
    }),
    { calories: 0, protein: 0 },
  );
}

function hasNutritionData(entry) {
  return Boolean(entry && ((entry.items && entry.items.length) || entry.notes));
}

function renderEditor() {
  const workout = getActiveWorkout();
  const hasWorkout = Boolean(workout);
  elements.emptyState.classList.toggle("hidden", hasWorkout);
  elements.workoutEditor.classList.toggle("hidden", !hasWorkout);
  if (!workout) return;

  elements.workoutName.value = workout.name || "";
  elements.workoutFocus.value = workout.focus || "";
  elements.workoutGoal.value = workout.goal || "";
  elements.workoutDuration.value = workout.duration || "";
  elements.workoutNotes.value = workout.notes || "";
  elements.exerciseSummary.textContent = `${workout.exercises.length} תרגילים`;
  renderDetailChips(workout);
  elements.exerciseList.innerHTML = "";

  workout.exercises.forEach((exercise, index) => {
    const fragment = elements.exerciseTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".exercise-card");
    const previewButton = fragment.querySelector(".exercise-preview");
    const body = fragment.querySelector(".exercise-body");
    fragment.querySelector(".exercise-title").textContent = exercise.name || `תרגיל ${index + 1}`;
    fragment.querySelector(".exercise-subtitle").textContent = `${exercise.equipment || "ללא ציוד"} · ${exercise.difficulty || "בינוני"}`;
    fragment.querySelector(".exercise-group-pill").textContent = exercise.group || "תרגיל";

    const image = fragment.querySelector(".exercise-image");
    image.src = getExerciseImage(exercise);
    image.alt = exercise.name ? `תמונה של ${exercise.name}` : "תמונה של תרגיל";

    bindValue(fragment, ".exercise-name", exercise.name, (value) => {
      exercise.name = value;
      persist();
      render();
    });
    bindValue(fragment, ".exercise-group", exercise.group, (value) => updateExercise(exercise, "group", value));
    bindValue(fragment, ".exercise-equipment", exercise.equipment, (value) => updateExercise(exercise, "equipment", value));
    bindValue(fragment, ".exercise-difficulty", exercise.difficulty, (value) => updateExercise(exercise, "difficulty", value), "change");
    bindValue(fragment, ".exercise-sets", exercise.sets, (value) => updateExercise(exercise, "sets", value));
    bindValue(fragment, ".exercise-reps", exercise.reps, (value) => updateExercise(exercise, "reps", value));
    bindValue(fragment, ".exercise-weight", exercise.weight, (value) => updateExercise(exercise, "weight", value));
    bindValue(fragment, ".exercise-rest", exercise.rest, (value) => updateExercise(exercise, "rest", value));
    bindValue(fragment, ".exercise-image-url", exercise.imageUrl, (value) => updateExercise(exercise, "imageUrl", value));
    bindValue(fragment, ".exercise-video-url", exercise.videoUrl, (value) => updateExercise(exercise, "videoUrl", value));
    bindValue(fragment, ".exercise-notes", exercise.notes, (value) => updateExercise(exercise, "notes", value));

    fragment.querySelector(".exercise-sets-chip").textContent = `${exercise.sets || "-"} סטים · ${exercise.reps || "-"}`;
    fragment.querySelector(".exercise-weight-chip").textContent = `${exercise.weight || "-"} ק"ג יעד`;
    fragment.querySelector(".exercise-rest-chip").textContent = `${exercise.rest || "-"} שנ' מנוחה`;

    const isEditing = state.editingExerciseId === exercise.id;
    body.classList.toggle("hidden", !isEditing);
    previewButton.addEventListener("click", () => {
      state.editingExerciseId = exercise.id;
      persist();
      render();
    });

    fragment.querySelector(".save-exercise-btn").addEventListener("click", () => {
      state.editingExerciseId = null;
      persist();
      render();
    });

    const videoLink = fragment.querySelector(".video-link");
    if (exercise.videoUrl) {
      videoLink.href = exercise.videoUrl;
      videoLink.classList.remove("hidden");
    }

    const sessionWeight = fragment.querySelector(".session-weight");
    const sessionReps = fragment.querySelector(".session-reps");
    const sessionNotes = fragment.querySelector(".session-notes");
    sessionWeight.value = exercise.weight ?? "";
    sessionReps.value = exercise.reps ?? "";
    sessionNotes.value = "";

    fragment.querySelector(".log-session-btn").addEventListener("click", () => {
      exercise.weight = sessionWeight.value;
      exercise.history.unshift({ date: new Date().toISOString(), weight: sessionWeight.value, reps: sessionReps.value, notes: sessionNotes.value });
      exercise.history = exercise.history.slice(0, 6);
      persist();
      render();
    });

    fragment.querySelector(".delete-exercise-btn").addEventListener("click", () => {
      workout.exercises = workout.exercises.filter((item) => item.id !== exercise.id);
      if (state.editingExerciseId === exercise.id) {
        state.editingExerciseId = null;
      }
      persist();
      render();
    });

    renderHistory(fragment.querySelector(".history-list"), exercise.history);
    elements.exerciseList.appendChild(card);
  });
}

function renderHistory(container, history) {
  container.innerHTML = "";
  if (!history.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>עדיין אין ביצוע שמור</strong><small>שמור אימון בפועל כדי לראות היסטוריה כאן.</small>";
    container.appendChild(empty);
    return;
  }
  history.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `<strong>${formatDate(entry.date)} · ${escapeHtml(entry.weight || "-")} ק"ג · ${escapeHtml(entry.reps || "-")}</strong><small>${escapeHtml(entry.notes || "ללא הערות")}</small>`;
    container.appendChild(item);
  });
}

function renderDetailChips(workout) {
  elements.detailChips.innerHTML = "";
  [`מטרה: ${workout.goal || "לא הוגדרה"}`, `משך: ${workout.duration || "-"} דקות`, `סה"כ תרגילים: ${workout.exercises.length}`].forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.detailChips.appendChild(chip);
  });
}

function updateWorkoutField(field, value) {
  const workout = getActiveWorkout();
  if (!workout) return;
  workout[field] = value;
  persist();
  renderHero();
  renderTabs();
  renderDetailChips(workout);
}

function updateExercise(exercise, field, value) {
  exercise[field] = value;
  persist();
  render();
}

function bindValue(fragment, selector, value, handler, eventName = "input") {
  const input = fragment.querySelector(selector);
  input.value = value ?? "";
  input.addEventListener(eventName, (event) => handler(event.target.value));
}

function loadState() {
  const rawState = localStorage.getItem(STORAGE_KEY);
  if (!rawState) return buildDefaultState();
  try {
    const parsed = JSON.parse(rawState);
    const workouts = Array.isArray(parsed.workouts) ? parsed.workouts.map(normalizeWorkout) : [];
    const nutrition = normalizeNutrition(parsed.nutrition || {});
    if (!workouts.length) return buildDefaultState();
    return {
      planName: parsed.planName || "התוכנית שלי",
      activeWorkoutId: parsed.activeWorkoutId || workouts[0].id,
      workouts,
      nutrition,
      selectedNutritionDate: parsed.selectedNutritionDate || formatIsoDate(today),
      calendarMonth: parsed.calendarMonth || formatMonthKey(today),
      currentView: parsed.currentView || "workouts",
      editingExerciseId: parsed.editingExerciseId || null,
    };
  } catch {
    return buildDefaultState();
  }
}

function buildDefaultState() {
  const workout = createWorkout("Push Day");
  workout.focus = "חזה, כתפיים, טרייספס";
  workout.goal = "עלייה במשקלי לחיצה";
  workout.duration = 70;
  workout.notes = "חימום כתפיים לפני סטים כבדים.";
  workout.exercises = ["בנץ' פרס", "לחיצת חזה בדאמבלים", "לחיצת כתפיים", "הרחקת כתפיים", "פשיטת מרפקים בכבל"]
    .map((name) => EXERCISE_LIBRARY.find((item) => item.name === name))
    .filter(Boolean)
    .map((exercise) => createExercise(exercise));
  return {
    planName: "התוכנית שלי",
    activeWorkoutId: workout.id,
    workouts: [workout],
    nutrition: {},
    selectedNutritionDate: formatIsoDate(today),
    calendarMonth: formatMonthKey(today),
    currentView: "workouts",
    editingExerciseId: null,
  };
}

function normalizeNutrition(nutrition) {
  const normalized = {};
  Object.entries(nutrition).forEach(([dateKey, entry]) => {
    if (!entry || typeof entry !== "object") return;
    const legacyItems = [];
    if (!Array.isArray(entry.items) && (entry.calories || entry.protein || entry.meals)) {
      legacyItems.push({
        id: crypto.randomUUID(),
        name: entry.meals || "רישום קודם",
        amount: "",
        calories: Number(entry.calories || 0),
        protein: Number(entry.protein || 0),
      });
    }
    normalized[dateKey] = {
      items: Array.isArray(entry.items)
        ? entry.items.map((item) => ({
            id: item.id || crypto.randomUUID(),
            name: item.name || "",
            amount: item.amount || "",
            calories: Number(item.calories || 0),
            protein: Number(item.protein || 0),
          }))
        : legacyItems,
      notes: entry.notes || "",
    };
  });
  return normalized;
}

function normalizeWorkout(workout) {
  return {
    id: workout.id || crypto.randomUUID(),
    name: workout.name || "אימון ללא שם",
    focus: workout.focus || "",
    goal: workout.goal || "",
    duration: workout.duration || "",
    notes: workout.notes || "",
    exercises: Array.isArray(workout.exercises) ? workout.exercises.map(normalizeExercise) : []
  };
}

function normalizeExercise(exercise) {
  const matched = EXERCISE_LIBRARY.find((item) => item.name === exercise.name) || {};
  return createExercise({ ...matched, ...exercise, history: Array.isArray(exercise.history) ? exercise.history : [] });
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveWorkout() {
  return state.workouts.find((workout) => workout.id === state.activeWorkoutId) || null;
}

function ensureActiveWorkout() {
  let workout = getActiveWorkout();
  if (workout) return workout;
  workout = createWorkout("אימון 1");
  state.workouts.push(workout);
  state.activeWorkoutId = workout.id;
  return workout;
}

function createWorkout(name) {
  return { id: crypto.randomUUID(), name, focus: "", goal: "", duration: "", notes: "", exercises: [] };
}

function createExercise(data) {
  return {
    id: data.id || crypto.randomUUID(),
    name: data.name || "",
    group: data.group || "",
    equipment: data.equipment || "",
    difficulty: data.difficulty || "מתחיל",
    sets: data.sets ?? 3,
    reps: data.reps || "10",
    weight: data.weight ?? "",
    rest: data.rest ?? 60,
    notes: data.notes || "",
    imageUrl: data.imageUrl || "",
    videoUrl: data.videoUrl || "",
    history: Array.isArray(data.history) ? data.history : []
  };
}

function presetExercise(name, group, equipment, difficulty, sets, reps, weight, rest, notes, videoUrl) {
  return createExercise({ name, group, equipment, difficulty, sets, reps, weight, rest, notes, videoUrl });
}

function getExerciseImage(exercise) {
  return exercise.imageUrl || createExerciseIllustration(exercise);
}

function createExerciseIllustration(exercise) {
  const palette = getPalette(exercise.group);
  const title = encodeXml(exercise.name || "GymFlow");
  const group = encodeXml(exercise.group || "Exercise");
  const equipment = encodeXml(exercise.equipment || "Training");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${palette[0]}"/><stop offset="100%" stop-color="${palette[1]}"/></linearGradient></defs><rect width="1200" height="700" rx="48" fill="url(#bg)"/><circle cx="1010" cy="110" r="150" fill="rgba(255,255,255,0.12)"/><circle cx="180" cy="590" r="180" fill="rgba(255,255,255,0.1)"/><g fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"><path d="M410 520c20-86 48-135 88-186 18-22 34-48 43-84"/><path d="M665 252c9 36 25 62 43 84 40 51 68 100 88 186"/><path d="M494 316c36 18 72 27 106 27s70-9 106-27"/><path d="M422 508h374"/></g><text x="72" y="110" fill="white" font-size="52" font-family="Rubik, Arial, sans-serif" font-weight="800">${title}</text><text x="72" y="172" fill="rgba(255,255,255,0.85)" font-size="30" font-family="Heebo, Arial, sans-serif">${group} · ${equipment}</text><text x="72" y="628" fill="rgba(255,255,255,0.92)" font-size="28" font-family="Heebo, Arial, sans-serif">GymFlow Elite</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getPalette(group) {
  const key = String(group || "").toLowerCase();
  if (key.includes("חזה")) return ["#ef7d33", "#722f1d"];
  if (key.includes("גב")) return ["#1b4f8c", "#091a34"];
  if (key.includes("כתפ")) return ["#7b5cff", "#281f67"];
  if (key.includes("רגל")) return ["#139d68", "#073826"];
  if (key.includes("בייספס")) return ["#d13d7a", "#4c1138"];
  if (key.includes("טרייספס")) return ["#00a7b5", "#0a3440"];
  if (key.includes("ישבן")) return ["#ff7b7b", "#5a2739"];
  return ["#243b6b", "#0b1325"];
}

function shiftMonth(monthKey, delta) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  return formatMonthKey(date);
}

function formatMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatIsoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatHumanDate(iso) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(isoDate));
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
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function encodeXml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
