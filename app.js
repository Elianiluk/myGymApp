const STORAGE_KEY = "gymflow-workout-planner";
const GEMINI_API_KEY = "AIzaSyA0Qk81De_-Sp6Ih9FJD3B-hsCsxT-8eSY";
const GEMINI_API_NOTE = "הדבק את Gemini API key שלך בתחילת app.js בתוך GEMINI_API_KEY";
const OPENAI_API_KEY = "";
const ANTHROPIC_API_KEY = "";
const OPENAI_API_NOTE = "הדבק את OpenAI API key שלך בתחילת app.js בתוך OPENAI_API_KEY";
const ANTHROPIC_API_NOTE = "הדבק את Anthropic API key שלך בתחילת app.js בתוך ANTHROPIC_API_KEY";
const AI_PROVIDER_LABELS = {
  gemini: "Gemini",
  openai: "OpenAI",
  anthropic: "Claude",
};
const AI_CHAT_MODELS = {
  gemini: ["gemini-2.5-flash", "gemini-2.5-pro"],
  openai: ["gpt-5-mini", "gpt-5"],
  anthropic: ["claude-3-5-haiku-latest", "claude-sonnet-4-20250514"],
};

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
  presetExercise("פארמר ווק", "אחיזה", "דאמבלים", "בינוני", 3, "30-40 מטר", 30, 60, "הליכה יציבה עם ליבה חזקה", "https://www.youtube.com/results?search_query=farmer+walk+form"),
  presetExercise("לחיצת חזה במכונה", "חזה", "מכונה", "מתחיל", 4, "10-12", 45, 75, "מסלול קבוע ונוח להתחלה", "https://www.youtube.com/results?search_query=chest+press+machine+form"),
  presetExercise("לחיצת חזה בסמית'", "חזה", "סמית'", "בינוני", 4, "8-10", 55, 90, "שליטה טובה במסלול הלחיצה", "https://www.youtube.com/results?search_query=smith+machine+bench+press+form"),
  presetExercise("פרפר בדאמבלים", "חזה", "דאמבלים", "בינוני", 3, "10-12", 12, 60, "מתיחה טובה לחזה עם מרפקים רכים", "https://www.youtube.com/results?search_query=dumbbell+fly+form"),
  presetExercise("פרפר בשיפוע חיובי", "חזה", "דאמבלים", "בינוני", 3, "10-12", 10, 60, "דגש על חזה עליון ומתיחה", "https://www.youtube.com/results?search_query=incline+dumbbell+fly+form"),
  presetExercise("לחיצת חזה אחיזה צרה", "חזה", "מוט", "בינוני", 4, "6-8", 50, 90, "מעורב חזה וטרייספס", "https://www.youtube.com/results?search_query=close+grip+bench+press+form"),
  presetExercise("סבנד פרס", "חזה", "פלטה", "מתחיל", 3, "12-15", 10, 45, "לחיצה עם סחיטה רציפה של החזה", "https://www.youtube.com/results?search_query=svend+press+form"),
  presetExercise("פולי עליון אחיזה רחבה", "גב", "מכונה", "מתחיל", 4, "10-12", 45, 75, "דגש רחב על לטס", "https://www.youtube.com/results?search_query=wide+grip+lat+pulldown+form"),
  presetExercise("פולי עליון אחיזה צרה", "גב", "מכונה", "מתחיל", 4, "10-12", 40, 75, "מסלול צמוד יותר ודגש על אמצע הגב", "https://www.youtube.com/results?search_query=close+grip+lat+pulldown+form"),
  presetExercise("חתירה בסמית'", "גב", "סמית'", "בינוני", 4, "8-10", 55, 75, "שליטה במסלול ומשיכה נקייה", "https://www.youtube.com/results?search_query=smith+machine+row+form"),
  presetExercise("חתירה בחזה נתמך", "גב", "מכונה", "מתחיל", 4, "10-12", 35, 60, "מוריד עומס מהגב התחתון", "https://www.youtube.com/results?search_query=chest+supported+row+form"),
  presetExercise("חתירה במכשיר האמר", "גב", "מכונה", "בינוני", 4, "8-10", 40, 75, "עבודה חזקה ואחידה לכל צד", "https://www.youtube.com/results?search_query=hammer+strength+row+form"),
  presetExercise("פנדליי רואו", "גב", "מוט", "מתקדם", 4, "5-8", 60, 105, "כל חזרה מהרצפה עם גב יציב", "https://www.youtube.com/results?search_query=pendlay+row+form"),
  presetExercise("רק פול", "גב", "מוט", "מתקדם", 4, "4-6", 140, 120, "עומסים כבדים לטראפ ולגב עליון", "https://www.youtube.com/results?search_query=rack+pull+form"),
  presetExercise("צ'ין אפ", "גב", "משקל גוף", "בינוני", 4, "6-10", 0, 90, "אחיזה תחתונה עם דגש גם על בייספס", "https://www.youtube.com/results?search_query=chin+up+form"),
  presetExercise("מתח בסיוע", "גב", "מכונה", "מתחיל", 4, "8-12", 25, 75, "דרך מעולה להשתפר במתח", "https://www.youtube.com/results?search_query=assisted+pull+up+machine+form"),
  presetExercise("לחיצת כתפיים במכונה", "כתפיים", "מכונה", "מתחיל", 4, "8-10", 30, 60, "מסלול נוח ולחיצה יציבה", "https://www.youtube.com/results?search_query=shoulder+press+machine+form"),
  presetExercise("לחיצת כתפיים עם מוט", "כתפיים", "מוט", "בינוני", 4, "6-8", 40, 90, "לחיצה קלאסית לעומס גבוה", "https://www.youtube.com/results?search_query=barbell+shoulder+press+form"),
  presetExercise("לחיצת כתפיים בסמית'", "כתפיים", "סמית'", "בינוני", 4, "8-10", 35, 75, "לחיצה יציבה בלי איבוד מסלול", "https://www.youtube.com/results?search_query=smith+machine+shoulder+press+form"),
  presetExercise("אפרייט רואו", "כתפיים", "מוט", "בינוני", 3, "10-12", 25, 45, "דגש על כתף צד וטרפזים", "https://www.youtube.com/results?search_query=upright+row+form"),
  presetExercise("הרחקת כתפיים בכבל", "כתפיים", "כבל", "מתחיל", 3, "12-15", 6, 45, "מתח רציף לכל האורך", "https://www.youtube.com/results?search_query=cable+lateral+raise+form"),
  presetExercise("הרחקת כתפיים כפיפה קדימה", "כתפיים", "דאמבלים", "מתחיל", 3, "12-15", 8, 45, "דגש על אחורי כתף", "https://www.youtube.com/results?search_query=bent+over+lateral+raise+form"),
  presetExercise("סקוואט בסמית'", "רגליים", "סמית'", "בינוני", 4, "8-10", 70, 90, "מסלול יציב ונוח לשליטה", "https://www.youtube.com/results?search_query=smith+machine+squat+form"),
  presetExercise("גביע סקוואט", "רגליים", "דאמבלים", "מתחיל", 4, "10-12", 24, 60, "מעולה ללימוד טכניקת סקוואט", "https://www.youtube.com/results?search_query=goblet+squat+form"),
  presetExercise("האק סקוואט", "רגליים", "מכונה", "בינוני", 4, "8-10", 80, 90, "דגש חזק על קדמת הירך", "https://www.youtube.com/results?search_query=hack+squat+form"),
  presetExercise("סקוואט פיצול", "רגליים", "דאמבלים", "בינוני", 3, "10 כל רגל", 14, 60, "שליטה ויציבות לכל רגל", "https://www.youtube.com/results?search_query=split+squat+form"),
  presetExercise("סטפ אפ", "רגליים", "דאמבלים", "מתחיל", 3, "10 כל רגל", 12, 45, "עולה דרך העקב ושומר יציבות", "https://www.youtube.com/results?search_query=step+up+exercise+form"),
  presetExercise("סומו סקוואט", "רגליים", "דאמבלים", "מתחיל", 3, "12-15", 24, 60, "דגש פנימי ירך וישבן", "https://www.youtube.com/results?search_query=sumo+squat+form"),
  presetExercise("הליכת מכרעיים", "רגליים", "דאמבלים", "בינוני", 3, "12 כל רגל", 14, 60, "שליטה בתנועה לאורך המסלול", "https://www.youtube.com/results?search_query=walking+lunge+form"),
  presetExercise("דדליפט סומו", "המסטרינג", "מוט", "מתקדם", 4, "4-6", 110, 120, "עמידה רחבה ודגש על ירך פנימית וישבן", "https://www.youtube.com/results?search_query=sumo+deadlift+form"),
  presetExercise("גוד מורנינג", "המסטרינג", "מוט", "בינוני", 3, "8-10", 35, 75, "שומר גב ניטרלי ומרגיש מתיחה", "https://www.youtube.com/results?search_query=good+morning+exercise+form"),
  presetExercise("כפיפת ברכיים בעמידה", "המסטרינג", "מכונה", "מתחיל", 3, "12-15", 18, 45, "עבודה מבודדת לכל רגל", "https://www.youtube.com/results?search_query=standing+leg+curl+form"),
  presetExercise("כפיפת ברכיים בישיבה", "המסטרינג", "מכונה", "מתחיל", 3, "12-15", 28, 45, "מסלול חלק עם שליטה מלאה", "https://www.youtube.com/results?search_query=seated+leg+curl+form"),
  presetExercise("דונקי קאלף רייז", "תאומים", "מכונה", "בינוני", 4, "15-20", 60, 30, "מתיחה עמוקה לתאומים", "https://www.youtube.com/results?search_query=donkey+calf+raise+form"),
  presetExercise("תאומים בלג פרס", "תאומים", "מכונה", "מתחיל", 4, "15-20", 100, 30, "קל להעמיס ולבודד", "https://www.youtube.com/results?search_query=calf+raise+on+leg+press+form"),
  presetExercise("כפיפת מרפקים בשיפוע", "בייספס", "דאמבלים", "בינוני", 3, "10-12", 10, 45, "מתיחה טובה בראש הארוך", "https://www.youtube.com/results?search_query=incline+dumbbell+curl+form"),
  presetExercise("קונסנטריישן קרל", "בייספס", "דאמבלים", "מתחיל", 3, "10-12", 10, 45, "בידוד חזק לכל יד", "https://www.youtube.com/results?search_query=concentration+curl+form"),
  presetExercise("ספיידר קרל", "בייספס", "מוט EZ", "בינוני", 3, "10-12", 18, 45, "עוצר תנופה ומחזק כיווץ", "https://www.youtube.com/results?search_query=spider+curl+form"),
  presetExercise("כפיפת מרפקים הפוכה", "בייספס", "מוט EZ", "בינוני", 3, "12-15", 15, 45, "דגש על אמה וברכיאליס", "https://www.youtube.com/results?search_query=reverse+curl+form"),
  presetExercise("כפיפת מרפקים בכבל מעל הראש", "בייספס", "כבל", "בינוני", 3, "12-15", 12, 45, "מתח רציף וכיווץ חזק", "https://www.youtube.com/results?search_query=high+cable+biceps+curl+form"),
  presetExercise("פשיטת מרפקים בחבל", "טרייספס", "כבל", "מתחיל", 3, "12-15", 18, 45, "פתיחה טובה בסוף התנועה", "https://www.youtube.com/results?search_query=rope+triceps+pushdown+form"),
  presetExercise("דיפ במכונה", "טרייספס", "מכונה", "מתחיל", 3, "10-12", 35, 60, "אלטרנטיבה יציבה למקבילים", "https://www.youtube.com/results?search_query=assisted+dips+machine+form"),
  presetExercise("קיקבק טרייספס", "טרייספס", "דאמבלים", "מתחיל", 3, "12-15", 8, 45, "כיווץ חזק בראש התנועה", "https://www.youtube.com/results?search_query=triceps+kickback+form"),
  presetExercise("פשיטת מרפק יד אחת בכבל", "טרייספס", "כבל", "מתחיל", 3, "12-15", 8, 45, "שומר על סימטריה בין הצדדים", "https://www.youtube.com/results?search_query=single+arm+triceps+pushdown+form"),
  presetExercise("לחיצה צרפתית בשכיבה", "טרייספס", "מוט EZ", "בינוני", 3, "10-12", 22, 60, "אלטרנטיבה מבוקרת לסקול קראשר", "https://www.youtube.com/results?search_query=lying+triceps+extension+form"),
  presetExercise("היפ אבדקשן", "ישבן", "מכונה", "מתחיל", 4, "15-20", 35, 45, "מבודד היטב את הגלוט מדיוס", "https://www.youtube.com/results?search_query=hip+abduction+machine+form"),
  presetExercise("היפ אדאקשן", "ירך פנימית", "מכונה", "מתחיל", 4, "15-20", 35, 45, "עבודה על מקרבים", "https://www.youtube.com/results?search_query=hip+adduction+machine+form"),
  presetExercise("קייבל פול ת'רו", "ישבן", "כבל", "בינוני", 3, "12-15", 25, 60, "דגש מצוין על היפ הינג'", "https://www.youtube.com/results?search_query=cable+pull+through+form"),
  presetExercise("הרמות אגן רגל אחת", "ישבן", "משקל גוף", "מתחיל", 3, "12 כל רגל", 0, 45, "שליטה וסימטריה בישבן", "https://www.youtube.com/results?search_query=single+leg+glute+bridge+form"),
  presetExercise("דד באג", "בטן", "משקל גוף", "מתחיל", 3, "10 כל צד", 0, 30, "מעולה לליבה ולשליטה", "https://www.youtube.com/results?search_query=dead+bug+exercise+form"),
  presetExercise("אופניים לבטן", "בטן", "משקל גוף", "מתחיל", 3, "20", 0, 30, "שילוב רוטציה ושרירי בטן", "https://www.youtube.com/results?search_query=bicycle+crunch+form"),
  presetExercise("הרמות ברכיים בקפטן צ'ר", "בטן", "משקל גוף", "מתחיל", 3, "12-15", 0, 30, "נוח יותר מהתלייה למתחילים", "https://www.youtube.com/results?search_query=captains+chair+leg+raise+form"),
  presetExercise("אב וויל", "בטן", "אב וויל", "מתקדם", 3, "8-12", 0, 45, "שליטה מלאה בגב ובליבה", "https://www.youtube.com/results?search_query=ab+wheel+rollout+form"),
  presetExercise("סייד פלאנק", "בטן", "משקל גוף", "מתחיל", 3, "30-45 שניות", 0, 30, "דגש על אלכסונים ויציבות", "https://www.youtube.com/results?search_query=side+plank+form"),
  presetExercise("רשן טוויסט", "בטן", "פלטה", "מתחיל", 3, "20", 10, 30, "רוטציה עם שליטה בליבה", "https://www.youtube.com/results?search_query=russian+twist+form"),
  presetExercise("שראג עם מוט", "טרפזים", "מוט", "בינוני", 4, "10-12", 70, 60, "עומס גבוה לטרפזים", "https://www.youtube.com/results?search_query=barbell+shrug+form"),
  presetExercise("חתירה גבוהה בכבל", "טרפזים", "כבל", "בינוני", 3, "12-15", 18, 45, "משלב טראפ וכתף אחורית", "https://www.youtube.com/results?search_query=cable+high+row+form"),
  presetExercise("פארמר ווק חד צדדי", "אחיזה", "דאמבלים", "בינוני", 3, "20-30 מטר", 26, 60, "משפר אחיזה וליבה אנטי-צדית", "https://www.youtube.com/results?search_query=suitcase+carry+form"),
  presetExercise("תלייה לאחיזה", "אחיזה", "משקל גוף", "מתחיל", 3, "20-40 שניות", 0, 45, "פשוט ויעיל לחיזוק אחיזה", "https://www.youtube.com/results?search_query=dead+hang+exercise+form"),
  presetExercise("כפיפת שורש כף יד", "אמות", "מוט", "מתחיל", 3, "15-20", 15, 30, "עבודה ישירה על אמות", "https://www.youtube.com/results?search_query=wrist+curl+form"),
  presetExercise("כפיפת שורש כף יד הפוכה", "אמות", "מוט", "מתחיל", 3, "15-20", 10, 30, "מחזק פושטי אמה", "https://www.youtube.com/results?search_query=reverse+wrist+curl+form"),
  presetExercise("דחיפת מזחלת", "פול באדי", "מזחלת", "בינוני", 6, "20-30 מטר", 80, 60, "מצוין לכוח ומתפרצות", "https://www.youtube.com/results?search_query=sled+push+form"),
  presetExercise("משיכת מזחלת", "פול באדי", "מזחלת", "בינוני", 6, "20-30 מטר", 60, 60, "עבודה פונקציונלית לכל הגוף", "https://www.youtube.com/results?search_query=sled+pull+form"),
  presetExercise("קטלבל סווינג", "פול באדי", "קטלבל", "בינוני", 4, "15-20", 20, 45, "כוח מתפרץ לירך אחורית וישבן", "https://www.youtube.com/results?search_query=kettlebell+swing+form"),
  presetExercise("תראסטר", "פול באדי", "דאמבלים", "מתקדם", 4, "8-10", 14, 75, "סקוואט ולחיצה בתרגיל אחד", "https://www.youtube.com/results?search_query=thruster+exercise+form"),
  presetExercise("ברפיז", "פול באדי", "משקל גוף", "בינוני", 4, "10-15", 0, 45, "אירובי, כוח ותנועה מלאה", "https://www.youtube.com/results?search_query=burpee+form"),
  presetExercise("טורקיש גט אפ", "פול באדי", "קטלבל", "מתקדם", 3, "5 כל צד", 12, 75, "שליטה, יציבות וחוזק כולל", "https://www.youtube.com/results?search_query=turkish+get+up+form")
];

const today = new Date();
const state = loadState();
let timerIntervalId = null;

const elements = {
  planName: document.querySelector("#planName"),
  profilePreview: document.querySelector("#profilePreview"),
  profileBody: document.querySelector("#profileBody"),
  profileSubtitle: document.querySelector("#profileSubtitle"),
  profileChips: document.querySelector("#profileChips"),
  muscleMapSubtitle: document.querySelector("#muscleMapSubtitle"),
  muscleRadarChart: document.querySelector("#muscleRadarChart"),
  muscleMapChips: document.querySelector("#muscleMapChips"),
  profileWeight: document.querySelector("#profileWeight"),
  profileHeight: document.querySelector("#profileHeight"),
  profileBirthDate: document.querySelector("#profileBirthDate"),
  profileAge: document.querySelector("#profileAge"),
  profileDailyCaloriesTarget: document.querySelector("#profileDailyCaloriesTarget"),
  profileDailyProteinTarget: document.querySelector("#profileDailyProteinTarget"),
  saveProfileBtn: document.querySelector("#saveProfileBtn"),
  goalsSubtitle: document.querySelector("#goalsSubtitle"),
  goalsChips: document.querySelector("#goalsChips"),
  goalsDailyCaloriesTarget: document.querySelector("#goalsDailyCaloriesTarget"),
  goalsDailyProteinTarget: document.querySelector("#goalsDailyProteinTarget"),
  saveGoalsBtn: document.querySelector("#saveGoalsBtn"),
  exerciseGoalsList: document.querySelector("#exerciseGoalsList"),
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
  workoutWeekPreview: document.querySelector("#workoutWeekPreview"),
  workoutWeekBody: document.querySelector("#workoutWeekBody"),
  workoutWeekSubtitle: document.querySelector("#workoutWeekSubtitle"),
  workoutWeekChips: document.querySelector("#workoutWeekChips"),
  prevWorkoutWeekBtn: document.querySelector("#prevWorkoutWeekBtn"),
  nextWorkoutWeekBtn: document.querySelector("#nextWorkoutWeekBtn"),
  workoutWeekLabel: document.querySelector("#workoutWeekLabel"),
  workoutWeekDays: document.querySelector("#workoutWeekDays"),
  workoutWeekSelectedDate: document.querySelector("#workoutWeekSelectedDate"),
  workoutWeekSelect: document.querySelector("#workoutWeekSelect"),
  saveWorkoutWeekBtn: document.querySelector("#saveWorkoutWeekBtn"),
  closeWorkoutWeekBtn: document.querySelector("#closeWorkoutWeekBtn"),
  workoutWeekDetailsTitle: document.querySelector("#workoutWeekDetailsTitle"),
  workoutWeekDetails: document.querySelector("#workoutWeekDetails"),
  showWorkoutViewBtn: document.querySelector("#showWorkoutViewBtn"),
  showNutritionViewBtn: document.querySelector("#showNutritionViewBtn"),
  showGoalsViewBtn: document.querySelector("#showGoalsViewBtn"),
  showStrengthViewBtn: document.querySelector("#showStrengthViewBtn"),
  showTimerViewBtn: document.querySelector("#showTimerViewBtn"),
  showAiViewBtn: document.querySelector("#showAiViewBtn"),
  showCalculatorsViewBtn: document.querySelector("#showCalculatorsViewBtn"),
  workoutView: document.querySelector("#workoutView"),
  nutritionView: document.querySelector("#nutritionView"),
  goalsView: document.querySelector("#goalsView"),
  strengthView: document.querySelector("#strengthView"),
  timerView: document.querySelector("#timerView"),
  aiView: document.querySelector("#aiView"),
  calculatorsView: document.querySelector("#calculatorsView"),
  timerSubtitle: document.querySelector("#timerSubtitle"),
  timerChips: document.querySelector("#timerChips"),
  timerDisplay: document.querySelector("#timerDisplay"),
  timerQuickOptions: document.querySelector("#timerQuickOptions"),
  timerCustomSeconds: document.querySelector("#timerCustomSeconds"),
  startTimerBtn: document.querySelector("#startTimerBtn"),
  pauseTimerBtn: document.querySelector("#pauseTimerBtn"),
  resetTimerBtn: document.querySelector("#resetTimerBtn"),
  timerStatus: document.querySelector("#timerStatus"),
  aiSubtitle: document.querySelector("#aiSubtitle"),
  aiChips: document.querySelector("#aiChips"),
  aiStatus: document.querySelector("#aiStatus"),
  aiProvider: document.querySelector("#aiProvider"),
  aiModel: document.querySelector("#aiModel"),
  aiEditMode: document.querySelector("#aiEditMode"),
  aiMessages: document.querySelector("#aiMessages"),
  aiPrompt: document.querySelector("#aiPrompt"),
  sendAiBtn: document.querySelector("#sendAiBtn"),
  clearAiChatBtn: document.querySelector("#clearAiChatBtn"),
  geminiImageModel: document.querySelector("#geminiImageModel"),
  aiImagePrompt: document.querySelector("#aiImagePrompt"),
  generateAiImageBtn: document.querySelector("#generateAiImageBtn"),
  clearAiImagesBtn: document.querySelector("#clearAiImagesBtn"),
  aiImageStatus: document.querySelector("#aiImageStatus"),
  aiImageGallery: document.querySelector("#aiImageGallery"),
  calculatorsSubtitle: document.querySelector("#calculatorsSubtitle"),
  calculatorsChips: document.querySelector("#calculatorsChips"),
  calculatorPicker: document.querySelector("#calculatorPicker"),
  bmiCalculator: document.querySelector("#bmiCalculator"),
  proteinCalculator: document.querySelector("#proteinCalculator"),
  oneRmCalculator: document.querySelector("#oneRmCalculator"),
  caloriesCalculator: document.querySelector("#caloriesCalculator"),
  bmiWeight: document.querySelector("#bmiWeight"),
  bmiHeight: document.querySelector("#bmiHeight"),
  bmiResultValue: document.querySelector("#bmiResultValue"),
  bmiResultText: document.querySelector("#bmiResultText"),
  proteinWeight: document.querySelector("#proteinWeight"),
  proteinMinValue: document.querySelector("#proteinMinValue"),
  proteinMaxValue: document.querySelector("#proteinMaxValue"),
  proteinResultText: document.querySelector("#proteinResultText"),
  oneRmWeight: document.querySelector("#oneRmWeight"),
  oneRmReps: document.querySelector("#oneRmReps"),
  oneRmResultValue: document.querySelector("#oneRmResultValue"),
  oneRmResultText: document.querySelector("#oneRmResultText"),
  caloriesWeight: document.querySelector("#caloriesWeight"),
  caloriesHeight: document.querySelector("#caloriesHeight"),
  caloriesAge: document.querySelector("#caloriesAge"),
  caloriesSex: document.querySelector("#caloriesSex"),
  caloriesActivity: document.querySelector("#caloriesActivity"),
  caloriesGoal: document.querySelector("#caloriesGoal"),
  caloriesBmrValue: document.querySelector("#caloriesBmrValue"),
  caloriesMaintenanceValue: document.querySelector("#caloriesMaintenanceValue"),
  caloriesTargetValue: document.querySelector("#caloriesTargetValue"),
  caloriesResultText: document.querySelector("#caloriesResultText"),
  prevMonthBtn: document.querySelector("#prevMonthBtn"),
  nextMonthBtn: document.querySelector("#nextMonthBtn"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarDays: document.querySelector("#calendarDays"),
  nutritionSelectedDate: document.querySelector("#nutritionSelectedDate"),
  nutritionStatus: document.querySelector("#nutritionStatus"),
  dailyCaloriesValue: document.querySelector("#dailyCaloriesValue"),
  dailyProteinValue: document.querySelector("#dailyProteinValue"),
  nutritionTargetStatus: document.querySelector("#nutritionTargetStatus"),
  morningWeight: document.querySelector("#morningWeight"),
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
  workoutDetailsPreview: document.querySelector("#workoutDetailsPreview"),
  workoutDetailsBody: document.querySelector("#workoutDetailsBody"),
  workoutDetailsTitle: document.querySelector("#workoutDetailsTitle"),
  workoutDetailsSubtitle: document.querySelector("#workoutDetailsSubtitle"),
  workoutName: document.querySelector("#workoutName"),
  workoutFocus: document.querySelector("#workoutFocus"),
  workoutGoal: document.querySelector("#workoutGoal"),
  workoutDuration: document.querySelector("#workoutDuration"),
  workoutNotes: document.querySelector("#workoutNotes"),
  detailChips: document.querySelector("#detailChips"),
  deleteWorkoutBtn: document.querySelector("#deleteWorkoutBtn"),
  addWorkoutBtn: document.querySelector("#addWorkoutBtn"),
  addExerciseBtn: document.querySelector("#addExerciseBtn"),
  quickSaveWorkoutBtn: document.querySelector("#quickSaveWorkoutBtn"),
  saveWorkoutBtn: document.querySelector("#saveWorkoutBtn"),
  exerciseList: document.querySelector("#exerciseList"),
  exerciseSummary: document.querySelector("#exerciseSummary"),
  exerciseTemplate: document.querySelector("#exerciseTemplate")
};

bindEvents();
render();

function bindEvents() {
  if (elements.planName) elements.planName.addEventListener("input", (event) => {
    state.planName = event.target.value;
    persist();
    renderStats();
  });
  if (elements.profilePreview) elements.profilePreview.addEventListener("click", () => {
    state.editingProfile = true;
    persist();
    renderStats();
  });
  if (elements.profileWeight) elements.profileWeight.addEventListener("input", (event) => {
    state.profile.weight = event.target.value;
    persist();
    renderStats();
  });
  if (elements.profileHeight) elements.profileHeight.addEventListener("input", (event) => {
    state.profile.height = event.target.value;
    persist();
    renderStats();
  });
  if (elements.profileBirthDate) elements.profileBirthDate.addEventListener("input", (event) => {
    state.profile.birthDate = event.target.value;
    persist();
    renderStats();
  });
  if (elements.profileDailyCaloriesTarget) elements.profileDailyCaloriesTarget.addEventListener("input", (event) => {
    state.profile.dailyCaloriesTarget = event.target.value;
    persist();
    renderStats();
    renderCalendar();
    renderNutritionForm();
  });
  if (elements.profileDailyProteinTarget) elements.profileDailyProteinTarget.addEventListener("input", (event) => {
    state.profile.dailyProteinTarget = event.target.value;
    persist();
    renderStats();
    renderCalendar();
    renderNutritionForm();
  });
  if (elements.saveProfileBtn) elements.saveProfileBtn.addEventListener("click", () => {
    state.editingProfile = false;
    persist();
    renderStats();
    pulseButton(elements.saveProfileBtn, "נשמר");
  });
  if (elements.goalsDailyCaloriesTarget) elements.goalsDailyCaloriesTarget.addEventListener("input", (event) => {
    state.profile.dailyCaloriesTarget = event.target.value;
    persist();
    renderGoalsSummary();
    renderCalendar();
    renderNutritionForm();
  });
  if (elements.goalsDailyProteinTarget) elements.goalsDailyProteinTarget.addEventListener("input", (event) => {
    state.profile.dailyProteinTarget = event.target.value;
    persist();
    renderGoalsSummary();
    renderCalendar();
    renderNutritionForm();
  });
  if (elements.saveGoalsBtn) elements.saveGoalsBtn.addEventListener("click", () => {
    persist();
    renderGoalsPanel();
    pulseButton(elements.saveGoalsBtn, "נשמר");
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
  elements.showGoalsViewBtn.addEventListener("click", () => setCurrentView("goals"));
  if (elements.showStrengthViewBtn) elements.showStrengthViewBtn.addEventListener("click", () => setCurrentView("strength"));
  if (elements.showTimerViewBtn) elements.showTimerViewBtn.addEventListener("click", () => setCurrentView("timer"));
  if (elements.showAiViewBtn) elements.showAiViewBtn.addEventListener("click", () => setCurrentView("ai"));
  if (elements.showCalculatorsViewBtn) elements.showCalculatorsViewBtn.addEventListener("click", () => setCurrentView("calculators"));
  if (elements.timerCustomSeconds) elements.timerCustomSeconds.addEventListener("input", (event) => {
    const value = Math.max(Number(event.target.value || 0), 0);
    state.timer.selectedSeconds = value;
    if (!state.timer.isRunning) {
      state.timer.remainingSeconds = value;
      state.timer.finished = false;
    }
    persist();
    renderTimer();
  });
  if (elements.startTimerBtn) elements.startTimerBtn.addEventListener("click", startTimer);
  if (elements.pauseTimerBtn) elements.pauseTimerBtn.addEventListener("click", pauseTimer);
  if (elements.resetTimerBtn) elements.resetTimerBtn.addEventListener("click", resetTimer);
  if (elements.aiProvider) elements.aiProvider.addEventListener("change", (event) => {
    state.ai.provider = event.target.value;
    persist();
    renderAiChat();
  });
  if (elements.aiModel) elements.aiModel.addEventListener("change", (event) => {
    state.ai.models[state.ai.provider] = event.target.value;
    persist();
    renderAiChat();
  });
  if (elements.aiEditMode) elements.aiEditMode.addEventListener("change", (event) => {
    state.ai.editMode = Boolean(event.target.checked);
    state.ai.status = state.ai.editMode
      ? "מצב עריכה פעיל. ה-AI יכול גם לבצע שינויים באתר."
      : "מצב עריכה כבוי. ה-AI רק קורא ועונה.";
    state.ai.statusType = state.ai.editMode ? "success" : "";
    persist();
    renderAiChat();
  });
  if (elements.geminiImageModel) elements.geminiImageModel.addEventListener("change", (event) => {
    state.ai.imageModel = event.target.value;
    persist();
    renderAiChat();
  });
  if (elements.sendAiBtn) elements.sendAiBtn.addEventListener("click", sendAiMessage);
  if (elements.clearAiChatBtn) elements.clearAiChatBtn.addEventListener("click", () => {
    state.ai.messages = [];
    state.ai.status = "הצ'אט נוקה.";
    persist();
    renderAiChat();
  });
  if (elements.generateAiImageBtn) elements.generateAiImageBtn.addEventListener("click", generateAiImage);
  if (elements.clearAiImagesBtn) elements.clearAiImagesBtn.addEventListener("click", () => {
    state.ai.generatedImages = [];
    state.ai.imageStatus = "הגלריה נוקתה.";
    persist();
    renderAiChat();
  });
  bindCalculatorInput(elements.bmiWeight, "bmi", "weight");
  bindCalculatorInput(elements.bmiHeight, "bmi", "height");
  bindCalculatorInput(elements.proteinWeight, "protein", "weight");
  bindCalculatorInput(elements.oneRmWeight, "oneRm", "weight");
  bindCalculatorInput(elements.oneRmReps, "oneRm", "reps");
  bindCalculatorInput(elements.caloriesWeight, "calories", "weight");
  bindCalculatorInput(elements.caloriesHeight, "calories", "height");
  bindCalculatorInput(elements.caloriesAge, "calories", "age");
  bindCalculatorInput(elements.caloriesSex, "calories", "sex", "change");
  bindCalculatorInput(elements.caloriesActivity, "calories", "activity", "change");
  bindCalculatorInput(elements.caloriesGoal, "calories", "goal", "change");
  document.querySelectorAll("[data-calculator-close]").forEach((button) => {
    button.addEventListener("click", () => {
      state.calculators.active = null;
      persist();
      renderCalculators();
    });
  });
  elements.prevMonthBtn.addEventListener("click", () => {
    state.selectedNutritionDate = shiftIsoDate(state.selectedNutritionDate, -7);
    state.calendarMonth = formatMonthKey(new Date(`${state.selectedNutritionDate}T00:00:00`));
    persist();
    renderCalendar();
    renderNutritionForm();
  });
  elements.nextMonthBtn.addEventListener("click", () => {
    state.selectedNutritionDate = shiftIsoDate(state.selectedNutritionDate, 7);
    state.calendarMonth = formatMonthKey(new Date(`${state.selectedNutritionDate}T00:00:00`));
    persist();
    renderCalendar();
    renderNutritionForm();
  });
  elements.addFoodBtn.addEventListener("click", addFoodForSelectedDate);
  elements.saveNutritionBtn.addEventListener("click", saveNutritionForSelectedDate);
  elements.clearNutritionBtn.addEventListener("click", clearNutritionForSelectedDate);
  elements.addWorkoutBtn.addEventListener("click", () => {
    const workout = createWorkout(`אימון ${state.workouts.length + 1}`);
    state.workouts.push(workout);
    state.activeWorkoutId = workout.id;
    state.editingWorkoutDetails = false;
    persist();
    render();
  });
  elements.addExerciseBtn.addEventListener("click", () => {
    ensureActiveWorkout();
    openExercisePicker();
  });
  if (elements.workoutWeekPreview) elements.workoutWeekPreview.addEventListener("click", () => {
    state.editingWorkoutWeek = true;
    persist();
    renderWorkoutWeek();
  });
  if (elements.prevWorkoutWeekBtn) elements.prevWorkoutWeekBtn.addEventListener("click", () => {
    state.workoutWeekDate = shiftIsoDate(state.workoutWeekDate || formatIsoDate(today), -7);
    persist();
    renderWorkoutWeek();
  });
  if (elements.nextWorkoutWeekBtn) elements.nextWorkoutWeekBtn.addEventListener("click", () => {
    state.workoutWeekDate = shiftIsoDate(state.workoutWeekDate || formatIsoDate(today), 7);
    persist();
    renderWorkoutWeek();
  });
  if (elements.closeWorkoutWeekBtn) elements.closeWorkoutWeekBtn.addEventListener("click", () => {
    state.editingWorkoutWeek = false;
    persist();
    renderWorkoutWeek();
    pulseButton(elements.closeWorkoutWeekBtn, "נסגר");
  });
  if (elements.workoutWeekSelect) elements.workoutWeekSelect.addEventListener("change", renderWorkoutWeekDetails);
  if (elements.saveWorkoutWeekBtn) elements.saveWorkoutWeekBtn.addEventListener("click", saveWorkoutWeekSelection);
  elements.quickSaveWorkoutBtn.addEventListener("click", () => {
    persist();
    pulseButton(elements.quickSaveWorkoutBtn, "נשמר");
  });
  elements.workoutDetailsPreview.addEventListener("click", () => {
    state.editingWorkoutDetails = true;
    persist();
    renderEditor();
  });
  elements.saveWorkoutBtn.addEventListener("click", () => {
    state.editingWorkoutDetails = false;
    persist();
    renderEditor();
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
  renderGoalsPanel();
  renderTimer();
  renderAiChat();
  renderCalculators();
  renderTabs();
  renderLibrary();
  renderHero();
  renderWorkoutWeek();
  renderCalendar();
  renderNutritionForm();
  renderEditor();
}

function renderCurrentView() {
  const isWorkoutView = state.currentView === "workouts";
  const isNutritionView = state.currentView === "nutrition";
  const isGoalsView = state.currentView === "goals";
  const isStrengthView = state.currentView === "strength";
  const isTimerView = state.currentView === "timer";
  const isAiView = state.currentView === "ai";
  const isCalculatorsView = state.currentView === "calculators";
  elements.workoutView.classList.toggle("hidden", !isWorkoutView);
  elements.nutritionView.classList.toggle("hidden", !isNutritionView);
  elements.goalsView.classList.toggle("hidden", !isGoalsView);
  elements.strengthView.classList.toggle("hidden", !isStrengthView);
  elements.timerView.classList.toggle("hidden", !isTimerView);
  elements.aiView.classList.toggle("hidden", !isAiView);
  elements.calculatorsView.classList.toggle("hidden", !isCalculatorsView);
  elements.nutritionView.classList.toggle("full-view", isNutritionView);
  elements.goalsView.classList.toggle("full-view", isGoalsView);
  elements.strengthView.classList.toggle("full-view", isStrengthView);
  elements.timerView.classList.toggle("full-view", isTimerView);
  elements.aiView.classList.toggle("full-view", isAiView);
  elements.calculatorsView.classList.toggle("full-view", isCalculatorsView);
  document.querySelector(".sidebar").classList.toggle("hidden", !isWorkoutView);
  elements.showWorkoutViewBtn.classList.toggle("active", isWorkoutView);
  elements.showNutritionViewBtn.classList.toggle("active", isNutritionView);
  elements.showGoalsViewBtn.classList.toggle("active", isGoalsView);
  if (elements.showStrengthViewBtn) elements.showStrengthViewBtn.classList.toggle("active", isStrengthView);
  if (elements.showTimerViewBtn) elements.showTimerViewBtn.classList.toggle("active", isTimerView);
  if (elements.showAiViewBtn) elements.showAiViewBtn.classList.toggle("active", isAiView);
  if (elements.showCalculatorsViewBtn) elements.showCalculatorsViewBtn.classList.toggle("active", isCalculatorsView);
}

function setCurrentView(view) {
  state.currentView = view;
  persist();
  renderCurrentView();
  renderTimer();
  renderAiChat();
  renderCalculators();
}

function renderStats() {
  if (elements.planName) elements.planName.value = state.planName;
  if (elements.profileWeight) elements.profileWeight.value = state.profile.weight || "";
  if (elements.profileHeight) elements.profileHeight.value = state.profile.height || "";
  if (elements.profileBirthDate) elements.profileBirthDate.value = state.profile.birthDate || "";
  if (elements.profileAge) elements.profileAge.value = getAgeFromBirthDate(state.profile.birthDate);
  if (elements.profileDailyCaloriesTarget) elements.profileDailyCaloriesTarget.value = state.profile.dailyCaloriesTarget || "";
  if (elements.profileDailyProteinTarget) elements.profileDailyProteinTarget.value = state.profile.dailyProteinTarget || "";
  if (elements.profileSubtitle) {
    elements.profileSubtitle.textContent = formatProfileSubtitle(state.profile);
  }
  if (elements.profileChips) {
    renderProfileChips();
  }
  if (elements.profilePreview) {
    elements.profilePreview.classList.toggle("hidden", Boolean(state.editingProfile));
  }
  if (elements.profileBody) {
    elements.profileBody.classList.toggle("hidden", !state.editingProfile);
  }
  elements.workoutCount.textContent = state.workouts.length;
  elements.exerciseCount.textContent = state.workouts.reduce((sum, workout) => sum + workout.exercises.length, 0);
  elements.sessionCount.textContent = state.workouts.reduce((sum, workout) => sum + workout.exercises.reduce((inner, exercise) => inner + exercise.history.length, 0), 0);
  renderMuscleMap();
}

function renderGoalsPanel() {
  renderGoalsSummary();
  if (elements.goalsDailyCaloriesTarget) elements.goalsDailyCaloriesTarget.value = state.profile.dailyCaloriesTarget || "";
  if (elements.goalsDailyProteinTarget) elements.goalsDailyProteinTarget.value = state.profile.dailyProteinTarget || "";
  renderExerciseGoalsList();
}

function renderTimer() {
  if (!elements.timerDisplay || !elements.timerQuickOptions) return;
  syncTimerInterval();
  const options = [30, 60, 120, 180, 300];
  elements.timerQuickOptions.innerHTML = "";
  options.forEach((seconds) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `ghost-btn timer-option-btn ${state.timer.selectedSeconds === seconds ? "active" : ""}`;
    button.textContent = `${seconds} שנ'`;
    button.addEventListener("click", () => {
      state.timer.selectedSeconds = seconds;
      state.timer.remainingSeconds = seconds;
      state.timer.isRunning = false;
      state.timer.finished = false;
      persist();
      renderTimer();
    });
    elements.timerQuickOptions.appendChild(button);
  });
  if (elements.timerCustomSeconds) {
    elements.timerCustomSeconds.value = state.timer.selectedSeconds || "";
  }
  elements.timerDisplay.textContent = formatTimer(state.timer.remainingSeconds || 0);
  elements.timerDisplay.classList.toggle("finished", Boolean(state.timer.finished));
  if (elements.timerStatus) {
    elements.timerStatus.textContent = state.timer.finished
      ? "הזמן נגמר."
      : state.timer.isRunning
        ? "הטיימר רץ עכשיו."
        : "הטיימר מוכן להפעלה.";
    elements.timerStatus.className = `target-status-card ${state.timer.finished ? "success" : ""}`;
  }
  if (elements.timerSubtitle) {
    elements.timerSubtitle.textContent = state.timer.isRunning
      ? `נשארו ${formatTimer(state.timer.remainingSeconds)}.`
      : `הזמן שנבחר: ${formatTimer(state.timer.selectedSeconds || 0)}.`;
  }
  if (elements.timerChips) {
    elements.timerChips.innerHTML = "";
    [`נבחר: ${formatTimer(state.timer.selectedSeconds || 0)}`, `נותר: ${formatTimer(state.timer.remainingSeconds || 0)}`].forEach((text) => {
      const chip = document.createElement("span");
      chip.className = "detail-chip";
      chip.textContent = text;
      elements.timerChips.appendChild(chip);
    });
  }
}

function startTimer() {
  const selected = Number(state.timer.selectedSeconds || 0);
  if (!selected) return;
  if (!state.timer.remainingSeconds || state.timer.finished) {
    state.timer.remainingSeconds = selected;
    state.timer.finished = false;
  }
  state.timer.isRunning = true;
  persist();
  syncTimerInterval();
  renderTimer();
}

function pauseTimer() {
  state.timer.isRunning = false;
  persist();
  syncTimerInterval();
  renderTimer();
}

function resetTimer() {
  state.timer.isRunning = false;
  state.timer.finished = false;
  state.timer.remainingSeconds = Number(state.timer.selectedSeconds || 0);
  persist();
  syncTimerInterval();
  renderTimer();
}

function syncTimerInterval() {
  if (state.timer.isRunning && !timerIntervalId) {
    timerIntervalId = window.setInterval(tickTimer, 1000);
  }
  if (!state.timer.isRunning && timerIntervalId) {
    window.clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function tickTimer() {
  if (!state.timer.isRunning) return;
  state.timer.remainingSeconds = Math.max(Number(state.timer.remainingSeconds || 0) - 1, 0);
  if (state.timer.remainingSeconds <= 0) {
    state.timer.isRunning = false;
    state.timer.finished = true;
    playTimerEndBeep();
  }
  persist();
  renderTimer();
}

function playTimerEndBeep() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gain.gain.value = 0.04;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.35);
  } catch {}
}

function formatTimer(totalSeconds) {
  const safe = Math.max(Number(totalSeconds || 0), 0);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderAiChat() {
  if (!elements.aiMessages) return;
  const provider = state.ai.provider || "gemini";
  const providerLabel = AI_PROVIDER_LABELS[provider] || "AI";
  const apiKey = getAiApiKey(provider);
  const currentModel = getCurrentAiModel();
  if (elements.aiProvider) elements.aiProvider.value = provider;
  renderAiModelOptions();
  if (elements.geminiImageModel) elements.geminiImageModel.value = state.ai.imageModel || "gemini-2.5-flash-image";
  if (elements.aiEditMode) elements.aiEditMode.checked = Boolean(state.ai.editMode);
  if (elements.aiStatus) {
    elements.aiStatus.textContent = state.ai.status || getAiProviderNote(provider);
    elements.aiStatus.className = `target-status-card ${state.ai.statusType || ""}`;
  }
  if (elements.aiSubtitle) {
    elements.aiSubtitle.textContent = state.ai.isLoading
      ? `${providerLabel} חושב כרגע...`
      : state.ai.editMode
        ? `בחר ספק ומודל. ה-${providerLabel} יכול לקרוא את הנתונים שלך וגם לערוך את האתר כשצריך.`
        : `בחר ספק ומודל. כרגע ה-${providerLabel} רק קורא ועונה בלי לבצע שינויים.`;
  }
  if (elements.aiChips) {
    elements.aiChips.innerHTML = "";
    [
      `ספק: ${providerLabel}`,
      `מודל: ${currentModel}`,
      `הודעות: ${state.ai.messages.length}`,
      state.ai.editMode ? "עריכה: פעילה" : "עריכה: כבויה",
      apiKey ? "API: מחובר" : "API: חסר",
      `תמונות: ${state.ai.generatedImages.length}`,
    ].forEach((text) => {
      const chip = document.createElement("span");
      chip.className = "detail-chip";
      chip.textContent = text;
      elements.aiChips.appendChild(chip);
    });
  }
  elements.aiMessages.innerHTML = "";
  if (!state.ai.messages.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>עדיין אין הודעות</strong><small>אפשר לשאול על אימונים, תזונה, תוכנית שבועית ועוד.</small>";
    elements.aiMessages.appendChild(empty);
  } else {
    state.ai.messages.forEach((message) => {
      const item = document.createElement("div");
      item.className = `ai-message ${message.role === "user" ? "user" : "model"}`;
      const senderLabel = message.role === "user" ? "אתה" : (AI_PROVIDER_LABELS[message.provider] || providerLabel);
      const actionNote = message.actionsApplied?.length
        ? `<small class="ai-message-note">בוצעו ${message.actionsApplied.length} פעולות באתר</small>`
        : "";
      item.innerHTML = `
        <strong>${senderLabel}</strong>
        <p>${escapeHtml(message.text)}</p>
        ${actionNote}
      `;
      elements.aiMessages.appendChild(item);
    });
  }
  if (elements.sendAiBtn) {
    elements.sendAiBtn.disabled = Boolean(state.ai.isLoading);
    elements.sendAiBtn.textContent = state.ai.isLoading ? "שולח..." : "שלח";
  }
  renderAiImageGallery();
}

async function sendAiMessage() {
  const prompt = elements.aiPrompt?.value.trim();
  if (!prompt) return;
  const provider = state.ai.provider || "gemini";
  const model = getCurrentAiModel();
  const apiKey = getAiApiKey(provider);
  if (!apiKey) {
    state.ai.status = getAiProviderNote(provider);
    state.ai.statusType = "danger";
    persist();
    renderAiChat();
    return;
  }
  state.ai.messages.push({ role: "user", text: prompt, provider });
  state.ai.isLoading = true;
  state.ai.status = `שולח הודעה ל-${AI_PROVIDER_LABELS[provider] || "AI"}...`;
  state.ai.statusType = "";
  if (elements.aiPrompt) elements.aiPrompt.value = "";
  persist();
  renderAiChat();
  try {
    const rawReply = await requestAiChatCompletion(provider, model);
    const parsedReply = parseAiAssistantResponse(rawReply);
    const appliedActions = state.ai.editMode ? applyAiActions(parsedReply.actions || []) : [];
    const replyText = formatAiReplyText(parsedReply.message, appliedActions, provider);
    state.ai.messages.push({
      role: "model",
      provider,
      text: replyText,
      actionsApplied: appliedActions,
    });
    state.ai.status = state.ai.editMode && appliedActions.length
      ? `התקבלה תשובה מ-${AI_PROVIDER_LABELS[provider] || "AI"} וגם בוצעו ${appliedActions.length} פעולות באתר.`
      : `התקבלה תשובה מ-${AI_PROVIDER_LABELS[provider] || "AI"}.`;
    state.ai.statusType = "success";
  } catch (error) {
    state.ai.status = formatAiProviderErrorMessage(provider, error.message);
    state.ai.statusType = "danger";
  } finally {
    state.ai.isLoading = false;
    persist();
    render();
  }
}

function renderAiModelOptions() {
  if (!elements.aiModel) return;
  const provider = state.ai.provider || "gemini";
  const options = AI_CHAT_MODELS[provider] || [];
  const currentModel = getCurrentAiModel();
  elements.aiModel.innerHTML = "";
  options.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    if (model === currentModel) option.selected = true;
    elements.aiModel.appendChild(option);
  });
  if (elements.aiModel.value !== currentModel && options[0]) {
    elements.aiModel.value = currentModel;
  }
}

function renderAiImageGallery() {
  if (!elements.aiImageGallery || !elements.aiImageStatus) return;
  elements.aiImageStatus.textContent = state.ai.imageStatus || "כאן תוכל ליצור תמונות עם Nano Banana ולהוריד אותן.";
  elements.aiImageStatus.className = `target-status-card ${state.ai.imageStatusType || ""}`;
  elements.aiImageGallery.innerHTML = "";
  if (elements.generateAiImageBtn) {
    elements.generateAiImageBtn.disabled = Boolean(state.ai.isGeneratingImage);
    elements.generateAiImageBtn.textContent = state.ai.isGeneratingImage ? "יוצר..." : "צור תמונה";
  }
  if (!state.ai.generatedImages.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>עדיין אין תמונות</strong><small>כתוב פרומפט, צור תמונה, ואז תוכל להוריד אותה מכאן.</small>";
    elements.aiImageGallery.appendChild(empty);
    return;
  }
  state.ai.generatedImages.forEach((image) => {
    const item = document.createElement("article");
    item.className = "ai-image-card";
    item.innerHTML = `
      <img class="ai-generated-image" src="${escapeAttribute(image.dataUrl)}" alt="${escapeAttribute(image.prompt || "תמונה שנוצרה")}" />
      <div class="ai-image-card-body">
        <strong>${escapeHtml(image.model)}</strong>
        <small>${escapeHtml(image.prompt)}</small>
        <div class="nutrition-actions ai-image-actions">
          <a class="primary-btn ai-download-btn" href="${escapeAttribute(image.dataUrl)}" download="${escapeAttribute(image.fileName)}">הורד תמונה</a>
        </div>
      </div>
    `;
    elements.aiImageGallery.appendChild(item);
  });
}

async function generateAiImage() {
  const prompt = elements.aiImagePrompt?.value.trim();
  if (!prompt) return;
  if (!GEMINI_API_KEY) {
    state.ai.imageStatus = GEMINI_API_NOTE;
    state.ai.imageStatusType = "danger";
    persist();
    renderAiChat();
    return;
  }
  state.ai.isGeneratingImage = true;
  state.ai.imageStatus = "יוצר תמונה עם Gemini...";
  state.ai.imageStatusType = "";
  persist();
  renderAiChat();
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(state.ai.imageModel || "gemini-2.5-flash-image")}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error?.message || "Gemini image generation failed");
    }
    const generatedImages = extractGeminiImages(data);
    if (!generatedImages.length) {
      throw new Error("לא התקבלה תמונה מהמודל.");
    }
    const timestamp = Date.now();
    generatedImages.forEach((image, index) => {
      state.ai.generatedImages.unshift({
        id: crypto.randomUUID(),
        prompt,
        model: state.ai.imageModel || "gemini-2.5-flash-image",
        dataUrl: image.dataUrl,
        fileName: `gemini-image-${timestamp}-${index + 1}.${image.extension}`,
      });
    });
    state.ai.generatedImages = state.ai.generatedImages.slice(0, 12);
    state.ai.imageStatus = `${generatedImages.length} תמונות נוצרו בהצלחה.`;
    state.ai.imageStatusType = "success";
  } catch (error) {
    state.ai.imageStatus = formatGeminiErrorMessage(error.message, "image");
    state.ai.imageStatusType = "danger";
  } finally {
    state.ai.isGeneratingImage = false;
    persist();
    renderAiChat();
  }
}

function extractGeminiImages(data) {
  const parts = data?.candidates?.flatMap((candidate) => candidate?.content?.parts || []) || [];
  return parts
    .map((part) => {
      const inline = part?.inlineData || part?.inline_data;
      if (!inline?.data) return null;
      const mimeType = inline.mimeType || inline.mime_type || "image/png";
      const extension = mimeType.includes("jpeg") || mimeType.includes("jpg") ? "jpg" : "png";
      return {
        dataUrl: `data:${mimeType};base64,${inline.data}`,
        extension,
      };
    })
    .filter(Boolean);
}

function formatGeminiErrorMessage(message, mode = "text") {
  const text = String(message || "");
  const lower = text.toLowerCase();
  if (lower.includes("quota") || lower.includes("rate limit") || lower.includes("billing")) {
    if (mode === "image") {
      return "אין כרגע quota זמין למודל התמונות של Gemini בחשבון הזה. בדרך כלל זה אומר שצריך Billing פעיל או שהמודל הזה לא זמין ב-Free Tier. בדוק ב-AI Studio את ה-Rate Limits וה-Billing.";
    }
    return "אין כרגע quota זמין ל-Gemini בחשבון הזה או שנחסם קצב הבקשות. בדוק ב-AI Studio את ה-Rate Limits וה-Billing.";
  }
  if (lower.includes("api key") || lower.includes("permission") || lower.includes("unauthorized") || lower.includes("forbidden")) {
    return "נראה שיש בעיה ב-Gemini API key או בהרשאות שלו. בדוק שהמפתח תקין ושייך לפרויקט פעיל ב-AI Studio.";
  }
  if (lower.includes("model")) {
    return "נראה שהמודל שנבחר לא זמין לחשבון או לא נתמך כרגע. נסה לבחור מודל אחר.";
  }
  return `שגיאה: ${text}`;
}

async function requestAiChatCompletion(provider, model) {
  const systemPrompt = buildAiSystemPrompt();
  if (provider === "openai") {
    return requestOpenAiChat(model, systemPrompt);
  }
  if (provider === "anthropic") {
    return requestAnthropicChat(model, systemPrompt);
  }
  return requestGeminiChat(model, systemPrompt);
}

async function requestGeminiChat(model, systemPrompt) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: systemPrompt }],
      },
      contents: state.ai.messages.map((message) => ({
        role: message.role === "model" ? "model" : "user",
        parts: [{ text: message.text }],
      })),
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || "Gemini API request failed");
  }
  return extractGeminiText(data);
}

async function requestOpenAiChat(model, systemPrompt) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content: [{ type: "input_text", text: systemPrompt }],
        },
        ...state.ai.messages.map((message) => ({
          role: message.role === "model" ? "assistant" : "user",
          content: [{ type: "input_text", text: message.text }],
        })),
      ],
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || "OpenAI API request failed");
  }
  return extractOpenAiText(data);
}

async function requestAnthropicChat(model, systemPrompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1400,
      system: systemPrompt,
      messages: state.ai.messages.map((message) => ({
        role: message.role === "model" ? "assistant" : "user",
        content: message.text,
      })),
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || "Anthropic API request failed");
  }
  return extractAnthropicText(data);
}

function extractGeminiText(data) {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return "";
  return parts.map((part) => part.text || "").filter(Boolean).join("\n\n").trim();
}

function extractOpenAiText(data) {
  if (data?.output_text) return String(data.output_text).trim();
  const parts = data?.output?.flatMap((item) => item?.content || []) || [];
  return parts.map((part) => part?.text || "").filter(Boolean).join("\n\n").trim();
}

function extractAnthropicText(data) {
  const parts = Array.isArray(data?.content) ? data.content : [];
  return parts.map((part) => part?.text || "").filter(Boolean).join("\n\n").trim();
}

function parseAiAssistantResponse(rawText) {
  const text = String(rawText || "").trim();
  const actionMatch = text.match(/<gymflow_actions>([\s\S]*?)<\/gymflow_actions>/i);
  let actions = [];
  if (actionMatch?.[1]) {
    const cleaned = actionMatch[1].replace(/```json|```/gi, "").trim();
    try {
      const parsed = JSON.parse(cleaned);
      actions = Array.isArray(parsed) ? parsed : [];
    } catch {}
  }
  const message = text
    .replace(/<gymflow_actions>[\s\S]*?<\/gymflow_actions>/gi, "")
    .replace(/<reply>|<\/reply>/gi, "")
    .trim();
  return { message, actions };
}

function formatAiReplyText(message, appliedActions, provider) {
  const cleanMessage = (message || "").trim();
  if (!appliedActions.length) {
    return cleanMessage || `התקבלה תשובה מ-${AI_PROVIDER_LABELS[provider] || "AI"}.`;
  }
  const actionSummary = appliedActions.map((item) => `• ${item}`).join("\n");
  if (!cleanMessage) {
    return `ביצעתי את השינויים שביקשת:\n${actionSummary}`;
  }
  return `${cleanMessage}\n\nבוצעו גם השינויים הבאים באתר:\n${actionSummary}`;
}

function buildAiSystemPrompt() {
  const currentModel = getCurrentAiModel();
  return [
    "אתה עוזר AI בתוך אפליקציית GymFlow בעברית.",
    "ענה בקצרה, ברור, ובטון תומך.",
    "מותר לך להסתמך על נתוני האתר שמופיעים בהקשר המצורף.",
    state.ai.editMode
      ? "אם המשתמש מבקש לבצע שינוי ממשי באתר, החזר תשובה אנושית קצרה ואחריה בלוק XML בשם <gymflow_actions> עם JSON תקין של מערך פעולות."
      : "מצב העריכה כבוי. אל תחזיר פעולות עריכה, רק הסבר ותענה.",
    "אל תמציא נתונים שלא קיימים בהקשר.",
    "הפעולות הנתמכות הן: update_profile, create_workout, update_workout, add_exercise, update_exercise, add_food_item, update_food_item, set_nutrition_day, set_workout_day.",
    "בכל פעולה השתמש בשמות בעברית כפי שהם מופיעים באתר כשאפשר.",
    "אם אין צורך לערוך את האתר, אל תחזיר שום בלוק פעולות.",
    `המודל הפעיל כרגע הוא ${currentModel}.`,
    `הקשר האתר:\n${buildAiSiteContext()}`,
  ].join("\n\n");
}

function buildAiSiteContext() {
  const selectedNutrition = ensureNutritionEntry(state.selectedNutritionDate || formatIsoDate(today));
  const activeWorkout = getActiveWorkout();
  const workoutLines = state.workouts.map((workout) => {
    const exercises = workout.exercises
      .slice(0, 12)
      .map((exercise) => `${exercise.name || "ללא שם"} (${exercise.weight || "-"} ק"ג, ${exercise.sets || "-"} סטים, ${exercise.reps || "-"})`)
      .join(", ");
    return `- ${workout.name || "אימון ללא שם"} | מיקוד: ${workout.focus || "-"} | מטרה: ${workout.goal || "-"} | תרגילים: ${exercises || "אין"}`;
  }).join("\n");
  const nutritionItems = (selectedNutrition.items || [])
    .map((item) => `${item.name || "ללא שם"} (${item.amount || "-"}, ${item.calories || 0} קלוריות, ${item.protein || 0} גרם חלבון)`)
    .join(", ");
  return [
    `תוכנית: ${state.planName || "ללא שם"}`,
    `פרופיל: משקל ${state.profile.weight || "-"} ק"ג, גובה ${state.profile.height || "-"} ס"מ, גיל ${getAgeFromBirthDate(state.profile.birthDate) || "-"}, יעד קלוריות ${state.profile.dailyCaloriesTarget || "-"}, יעד חלבון ${state.profile.dailyProteinTarget || "-"}`,
    `אימון פעיל: ${activeWorkout?.name || "אין"}`,
    `אימונים קיימים:\n${workoutLines || "- אין אימונים"}`,
    `תזונה לתאריך ${state.selectedNutritionDate || formatIsoDate(today)}: משקל בוקר ${selectedNutrition.morningWeight || "-"}, מזונות: ${nutritionItems || "אין"}, הערות: ${selectedNutrition.notes || "-"}`,
  ].join("\n");
}

function applyAiActions(actions) {
  const summaries = [];
  actions.forEach((action) => {
    const summary = applySingleAiAction(action);
    if (summary) summaries.push(summary);
  });
  if (summaries.length) {
    syncCalculatorsWithProfile();
  }
  return summaries;
}

function applySingleAiAction(action) {
  if (!action || typeof action !== "object") return "";
  const type = action.type || "";
  if (type === "update_profile") {
    Object.assign(state.profile, pickDefined(action, ["weight", "height", "birthDate", "dailyCaloriesTarget", "dailyProteinTarget"]));
    return "הפרופיל עודכן";
  }
  if (type === "create_workout") {
    const workout = createWorkout(action.name || "אימון חדש");
    workout.focus = action.focus || "";
    workout.goal = action.goal || "";
    workout.duration = action.duration || "";
    workout.notes = action.notes || "";
    state.workouts.push(workout);
    if (action.setActive !== false) state.activeWorkoutId = workout.id;
    return `נוצר אימון חדש: ${workout.name}`;
  }
  if (type === "update_workout") {
    const workout = findWorkoutByAction(action);
    if (!workout) return "";
    Object.assign(workout, pickDefined(action.patch || action, ["name", "focus", "goal", "duration", "notes"]));
    if (action.setActive) state.activeWorkoutId = workout.id;
    return `האימון ${workout.name || "ללא שם"} עודכן`;
  }
  if (type === "add_exercise") {
    const workout = findWorkoutByAction(action) || ensureActiveWorkout();
    const base = findLibraryExercise(action.exercise?.name || action.name) || {};
    const exercise = createExercise({
      ...base,
      ...(action.exercise || {}),
    });
    workout.exercises.push(exercise);
    state.activeWorkoutId = workout.id;
    return `נוסף התרגיל ${exercise.name || "חדש"} לאימון ${workout.name || "ללא שם"}`;
  }
  if (type === "update_exercise") {
    const workout = findWorkoutByAction(action) || ensureActiveWorkout();
    const exercise = findExerciseByAction(workout, action);
    if (!exercise) return "";
    Object.assign(exercise, pickDefined(action.patch || action, ["name", "englishName", "group", "equipment", "difficulty", "sets", "reps", "weight", "goalWeight", "rest", "notes", "videoUrl", "imageUrl"]));
    return `התרגיל ${exercise.name || "ללא שם"} עודכן`;
  }
  if (type === "add_food_item") {
    const dateKey = action.date || state.selectedNutritionDate || formatIsoDate(today);
    const entry = ensureNutritionEntry(dateKey);
    entry.items.unshift({
      id: crypto.randomUUID(),
      name: action.item?.name || action.name || "",
      amount: action.item?.amount || action.amount || "",
      calories: Number(action.item?.calories ?? action.calories ?? 0),
      protein: Number(action.item?.protein ?? action.protein ?? 0),
    });
    state.selectedNutritionDate = dateKey;
    return `נוסף מזון ליום ${formatHumanDate(dateKey)}`;
  }
  if (type === "update_food_item") {
    const dateKey = action.date || state.selectedNutritionDate || formatIsoDate(today);
    const entry = ensureNutritionEntry(dateKey);
    const item = entry.items.find((food) => food.id === action.itemId || (action.itemName && food.name === action.itemName));
    if (!item) return "";
    Object.assign(item, pickDefined(action.patch || action, ["name", "amount"]));
    if ((action.patch || action).calories !== undefined) item.calories = Number((action.patch || action).calories || 0);
    if ((action.patch || action).protein !== undefined) item.protein = Number((action.patch || action).protein || 0);
    state.selectedNutritionDate = dateKey;
    return `פריט אוכל עודכן ליום ${formatHumanDate(dateKey)}`;
  }
  if (type === "set_nutrition_day") {
    const dateKey = action.date || state.selectedNutritionDate || formatIsoDate(today);
    const entry = ensureNutritionEntry(dateKey);
    if (action.morningWeight !== undefined) entry.morningWeight = action.morningWeight;
    if (action.notes !== undefined) entry.notes = action.notes;
    state.selectedNutritionDate = dateKey;
    return `פרטי התזונה ליום ${formatHumanDate(dateKey)} עודכנו`;
  }
  if (type === "set_workout_day") {
    const dateKey = action.date || state.selectedWorkoutLogDate || formatIsoDate(today);
    if (action.rest) {
      delete state.workoutLog[dateKey];
      state.selectedWorkoutLogDate = dateKey;
      return `היום ${formatHumanDate(dateKey)} סומן כמנוחה`;
    }
    const workout = findWorkoutByAction(action);
    if (!workout) return "";
    state.workoutLog[dateKey] = {
      workoutId: workout.id,
      workoutName: workout.name || "אימון ללא שם",
      exercises: workout.exercises.map((exercise) => exercise.name || "תרגיל ללא שם"),
      exerciseEntries: buildWorkoutLogExerciseEntries(workout),
    };
    state.selectedWorkoutLogDate = dateKey;
    return `ליום ${formatHumanDate(dateKey)} הוגדר האימון ${workout.name}`;
  }
  return "";
}

function pickDefined(source, fields) {
  return fields.reduce((acc, field) => {
    if (source?.[field] !== undefined) {
      acc[field] = source[field];
    }
    return acc;
  }, {});
}

function findWorkoutByAction(action) {
  return state.workouts.find((workout) =>
    workout.id === action.workoutId
    || (action.workoutName && workout.name === action.workoutName)
    || (action.name && workout.name === action.name)
  ) || null;
}

function findExerciseByAction(workout, action) {
  return workout?.exercises?.find((exercise) =>
    exercise.id === action.exerciseId
    || (action.exerciseName && exercise.name === action.exerciseName)
    || (action.name && exercise.name === action.name)
  ) || null;
}

function findLibraryExercise(name) {
  if (!name) return null;
  return EXERCISE_LIBRARY.find((exercise) => exercise.name === name || exercise.englishName === name) || null;
}

function getCurrentAiModel() {
  const provider = state.ai.provider || "gemini";
  const model = state.ai.models?.[provider];
  return model || AI_CHAT_MODELS[provider]?.[0] || "gemini-2.5-flash";
}

function getAiApiKey(provider) {
  if (provider === "openai") return OPENAI_API_KEY;
  if (provider === "anthropic") return ANTHROPIC_API_KEY;
  return GEMINI_API_KEY;
}

function getAiProviderNote(provider) {
  if (provider === "openai") return OPENAI_API_NOTE;
  if (provider === "anthropic") return ANTHROPIC_API_NOTE;
  return GEMINI_API_NOTE;
}

function formatAiProviderErrorMessage(provider, message) {
  if (provider === "gemini") {
    return formatGeminiErrorMessage(message, "text");
  }
  const text = String(message || "");
  const lower = text.toLowerCase();
  if (lower.includes("quota") || lower.includes("rate") || lower.includes("billing")) {
    return `נראה שאין כרגע quota זמין ל-${AI_PROVIDER_LABELS[provider] || "AI"} או שנחסם קצב הבקשות. בדוק חיוב, מגבלות שימוש והרשאות בפרויקט של ה-API.`;
  }
  if (lower.includes("api key") || lower.includes("auth") || lower.includes("unauthorized") || lower.includes("forbidden")) {
    return `נראה שיש בעיה ב-API key של ${AI_PROVIDER_LABELS[provider] || "AI"} או בהרשאות שלו. בדוק שהמפתח נכון ושהוא פעיל.`;
  }
  if (lower.includes("model")) {
    return `נראה שהמודל שנבחר לא זמין כרגע אצל ${AI_PROVIDER_LABELS[provider] || "AI"}. נסה לבחור מודל אחר.`;
  }
  return `שגיאה: ${text}`;
}

function renderCalculators() {
  if (!elements.calculatorPicker) return;
  syncCalculatorsWithProfile();
  renderCalculatorPicker();
  renderBmiCalculator();
  renderProteinCalculator();
  renderOneRmCalculator();
  renderCaloriesCalculator();
  renderCalculatorSummary();
}

function renderCalculatorPicker() {
  elements.calculatorPicker.innerHTML = "";
  getCalculatorDefinitions().forEach((calculator) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `workout-tab calculator-picker-btn ${state.calculators.active === calculator.id ? "active" : ""}`;
    button.innerHTML = `<strong>${calculator.title}</strong><small>${calculator.subtitle}</small>`;
    button.addEventListener("click", () => {
      state.calculators.active = state.calculators.active === calculator.id ? null : calculator.id;
      persist();
      renderCalculators();
    });
    elements.calculatorPicker.appendChild(button);
  });
}

function renderCalculatorSummary() {
  if (elements.calculatorsSubtitle) {
    elements.calculatorsSubtitle.textContent = state.calculators.active
      ? `פתוח עכשיו: ${getCalculatorDefinitions().find((item) => item.id === state.calculators.active)?.title || "מחשבון"}`
      : "בחר מחשבון כדי לפתוח אותו, לחשב, ואז לעבור לאחר.";
  }
  if (!elements.calculatorsChips) return;
  elements.calculatorsChips.innerHTML = "";
  const chips = [
    `BMI: ${getBmiChipText()}`,
    `חלבון: ${getProteinChipText()}`,
    `1RM: ${getOneRmChipText()}`,
    `קלוריות: ${getCaloriesChipText()}`,
  ];
  chips.forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.calculatorsChips.appendChild(chip);
  });
}

function renderBmiCalculator() {
  const calculator = state.calculators.bmi;
  if (elements.bmiCalculator) elements.bmiCalculator.classList.toggle("hidden", state.calculators.active !== "bmi");
  if (elements.bmiWeight) elements.bmiWeight.value = calculator.weight || "";
  if (elements.bmiHeight) elements.bmiHeight.value = calculator.height || "";
  const result = calculateBmi(calculator.weight, calculator.height);
  if (elements.bmiResultValue) elements.bmiResultValue.textContent = result.value;
  if (elements.bmiResultText) elements.bmiResultText.textContent = result.text;
}

function renderProteinCalculator() {
  const calculator = state.calculators.protein;
  if (elements.proteinCalculator) elements.proteinCalculator.classList.toggle("hidden", state.calculators.active !== "protein");
  if (elements.proteinWeight) elements.proteinWeight.value = calculator.weight || "";
  const result = calculateProteinRange(calculator.weight);
  if (elements.proteinMinValue) elements.proteinMinValue.textContent = result.min;
  if (elements.proteinMaxValue) elements.proteinMaxValue.textContent = result.max;
  if (elements.proteinResultText) elements.proteinResultText.textContent = result.text;
}

function renderOneRmCalculator() {
  const calculator = state.calculators.oneRm;
  if (elements.oneRmCalculator) elements.oneRmCalculator.classList.toggle("hidden", state.calculators.active !== "oneRm");
  if (elements.oneRmWeight) elements.oneRmWeight.value = calculator.weight || "";
  if (elements.oneRmReps) elements.oneRmReps.value = calculator.reps || "";
  const result = calculateOneRm(calculator.weight, calculator.reps);
  if (elements.oneRmResultValue) elements.oneRmResultValue.textContent = result.value;
  if (elements.oneRmResultText) elements.oneRmResultText.textContent = result.text;
}

function renderCaloriesCalculator() {
  const calculator = state.calculators.calories;
  if (elements.caloriesCalculator) elements.caloriesCalculator.classList.toggle("hidden", state.calculators.active !== "calories");
  if (elements.caloriesWeight) elements.caloriesWeight.value = calculator.weight || "";
  if (elements.caloriesHeight) elements.caloriesHeight.value = calculator.height || "";
  if (elements.caloriesAge) elements.caloriesAge.value = calculator.age || "";
  if (elements.caloriesSex) elements.caloriesSex.value = calculator.sex || "male";
  if (elements.caloriesActivity) elements.caloriesActivity.value = calculator.activity || "1.55";
  if (elements.caloriesGoal) elements.caloriesGoal.value = calculator.goal || "maintain";
  const result = calculateCalories(calculator);
  if (elements.caloriesBmrValue) elements.caloriesBmrValue.textContent = result.bmr;
  if (elements.caloriesMaintenanceValue) elements.caloriesMaintenanceValue.textContent = result.maintenance;
  if (elements.caloriesTargetValue) elements.caloriesTargetValue.textContent = result.target;
  if (elements.caloriesResultText) elements.caloriesResultText.textContent = result.text;
}

function renderGoalsSummary() {
  const allExercises = getAllExercises();
  const goalsCount = allExercises.filter((exercise) => exercise.goalWeight).length;
  if (elements.goalsSubtitle) {
    elements.goalsSubtitle.textContent = goalsCount
      ? `${goalsCount} תרגילים עם יעד משקל הוגדרו.`
      : "לחץ כדי לערוך יעדי תזונה ויעדי משקל לתרגילים.";
  }
  if (!elements.goalsChips) return;
  elements.goalsChips.innerHTML = "";
  [
    `קלוריות: ${state.profile.dailyCaloriesTarget || "-"}`,
    `חלבון: ${state.profile.dailyProteinTarget || "-"}`,
    `יעדי משקל: ${goalsCount}`,
  ].forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.goalsChips.appendChild(chip);
  });
}

function renderExerciseGoalsList() {
  if (!elements.exerciseGoalsList) return;
  elements.exerciseGoalsList.innerHTML = "";
  const exercises = getAllExercises();
  if (!exercises.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>עדיין אין תרגילים</strong><small>תוסיף תרגילים לאימונים ואז תוכל להציב יעד משקל.</small>";
    elements.exerciseGoalsList.appendChild(empty);
    return;
  }
  exercises.forEach((exercise) => {
    const item = document.createElement("label");
    item.className = "goal-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(exercise.name || "תרגיל ללא שם")}</strong>
        <small>${escapeHtml(exercise.englishName || exercise.group || "")}</small>
      </div>
      <div class="goal-inputs">
        <label class="goal-input-group">
          <span class="label">משקל נוכחי</span>
          <input class="text-input current-goal-weight-input" type="text" value="${escapeAttribute(exercise.weight || "")}" placeholder="אין עדיין משקל" readonly>
        </label>
        <label class="goal-input-group">
          <span class="label">משקל יעד</span>
          <input class="text-input goal-weight-input" type="number" min="0" step="0.5" placeholder="יעד בק\"ג" value="${escapeAttribute(exercise.goalWeight || "")}">
        </label>
      </div>
    `;
    item.querySelector(".goal-weight-input").addEventListener("input", (event) => {
      exercise.goalWeight = event.target.value;
      persist();
      renderGoalsSummary();
    });
    elements.exerciseGoalsList.appendChild(item);
  });
}

function getAllExercises() {
  return state.workouts.flatMap((workout) => workout.exercises);
}

function renderMuscleMap() {
  if (!elements.muscleRadarChart || !elements.muscleMapChips) return;
  const data = getMuscleMapData(getAllExercises());
  elements.muscleRadarChart.innerHTML = renderRadarChart(data.values);
  elements.muscleMapChips.innerHTML = "";
  data.topGroups.forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.muscleMapChips.appendChild(chip);
  });
  if (elements.muscleMapSubtitle) {
    elements.muscleMapSubtitle.textContent = data.subtitle;
  }
}

function getMuscleMapData(exercises) {
  const labels = ["חזה", "גב", "רגליים", "כתפיים", "זרועות", "בטן"];
  const buckets = Object.fromEntries(labels.map((label) => [label, 0]));
  exercises.forEach((exercise) => {
    const bucket = mapExerciseToMuscleBucket(exercise);
    const score = getExerciseStrengthScore(exercise);
    buckets[bucket] += score;
  });
  const rawValues = labels.map((label) => buckets[label]);
  const maxValue = Math.max(...rawValues, 0);
  const values = rawValues.map((value) => {
    if (!maxValue) return 20;
    return Math.max(18, Math.round((value / maxValue) * 100));
  });
  const sorted = labels
    .map((label, index) => ({ label, score: rawValues[index] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((item) => item.score > 0)
    .map((item) => `${item.label}: ${Math.round(item.score)} נק'`);
  return {
    labels,
    values,
    topGroups: sorted.length ? sorted : ["הוסף עוד משקלים כדי לראות דפוס חזק יותר"],
    subtitle: maxValue
      ? "הגרף מבוסס על משקלים נוכחיים והיסטוריית הביצועים השמורה."
      : "עדיין אין מספיק נתוני משקל, אז מוצג בסיס התחלתי.",
  };
}

function mapExerciseToMuscleBucket(exercise) {
  const text = `${exercise.group || ""} ${exercise.name || ""} ${exercise.englishName || ""}`.toLowerCase();
  if (text.includes("חזה") || text.includes("bench") || text.includes("chest")) return "חזה";
  if (text.includes("גב") || text.includes("row") || text.includes("pulldown") || text.includes("pull")) return "גב";
  if (text.includes("רגל") || text.includes("סקוואט") || text.includes("squat") || text.includes("המסטרינג") || text.includes("תאומים")) return "רגליים";
  if (text.includes("כתפ") || text.includes("shoulder") || text.includes("arnold") || text.includes("lateral raise")) return "כתפיים";
  if (text.includes("בטן") || text.includes("plank") || text.includes("crunch") || text.includes("abs") || text.includes("ab")) return "בטן";
  if (text.includes("בייספס") || text.includes("טרייספס") || text.includes("curl") || text.includes("pushdown") || text.includes("arm")) return "זרועות";
  return "זרועות";
}

function getExerciseStrengthScore(exercise) {
  const current = Number(exercise.weight || 0);
  const goal = Number(exercise.goalWeight || 0);
  const history = Array.isArray(exercise.history) ? exercise.history : [];
  const historyMax = history.reduce((max, entry) => Math.max(max, Number(entry.weight || 0)), 0);
  const setsBonus = Math.max(Number(exercise.sets || 0), 1) * 2;
  const bodyweightBonus = current || historyMax || goal ? 0 : 12;
  return Math.max(current, historyMax, goal * 0.85, bodyweightBonus) + setsBonus;
}

function renderRadarChart(values) {
  const labels = ["חזה", "גב", "רגליים", "כתפיים", "זרועות", "בטן"];
  const centerX = 170;
  const centerY = 150;
  const radius = 84;
  const levels = [25, 50, 75, 100];
  const pointsForLevel = (level) => labels.map((_, index) => {
    const angle = ((Math.PI * 2) / labels.length) * index - (Math.PI / 2);
    const currentRadius = (radius * level) / 100;
    const x = centerX + (Math.cos(angle) * currentRadius);
    const y = centerY + (Math.sin(angle) * currentRadius);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const dataPoints = labels.map((_, index) => {
    const angle = ((Math.PI * 2) / labels.length) * index - (Math.PI / 2);
    const currentRadius = (radius * values[index]) / 100;
    return {
      x: centerX + (Math.cos(angle) * currentRadius),
      y: centerY + (Math.sin(angle) * currentRadius),
      labelX: centerX + (Math.cos(angle) * (radius + 26)),
      labelY: centerY + (Math.sin(angle) * (radius + 26)),
    };
  });
  const dataPolygon = dataPoints.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  return `
    <svg viewBox="0 0 340 300" class="radar-svg" role="img" aria-label="חוזק לפי קבוצות שרירים">
      ${levels.map((level) => `<polygon points="${pointsForLevel(level)}" class="radar-grid radar-grid-${level}" />`).join("")}
      ${dataPoints.map((point) => `<line x1="${centerX}" y1="${centerY}" x2="${point.labelX}" y2="${point.labelY}" class="radar-axis" />`).join("")}
      <polygon points="${dataPolygon}" class="radar-shape" />
      ${dataPoints.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4" class="radar-dot" />`).join("")}
      ${dataPoints.map((point, index) => `<text x="${point.labelX}" y="${point.labelY}" class="radar-label" text-anchor="middle">${labels[index]}</text>`).join("")}
    </svg>
  `;
}

function getCalculatorDefinitions() {
  return [
    { id: "bmi", title: "BMI", subtitle: "יחס משקל וגובה" },
    { id: "protein", title: "חלבון", subtitle: "1.6-2.2 גרם לק\"ג" },
    { id: "oneRm", title: "1RM", subtitle: "מקסימום משוער לחזרה אחת" },
    { id: "calories", title: "קלוריות", subtitle: "BMR, תחזוקה ויעד יומי" },
  ];
}

function bindCalculatorInput(element, section, field, eventName = "input") {
  if (!element) return;
  element.addEventListener(eventName, (event) => {
    state.calculators[section][field] = event.target.value;
    persist();
    renderCalculators();
  });
}

function syncCalculatorsWithProfile() {
  const age = getAgeFromBirthDate(state.profile.birthDate);
  state.calculators.bmi.weight = state.calculators.bmi.weight || state.profile.weight || "";
  state.calculators.bmi.height = state.calculators.bmi.height || state.profile.height || "";
  state.calculators.protein.weight = state.calculators.protein.weight || state.profile.weight || "";
  state.calculators.calories.weight = state.calculators.calories.weight || state.profile.weight || "";
  state.calculators.calories.height = state.calculators.calories.height || state.profile.height || "";
  state.calculators.calories.age = state.calculators.calories.age || age || "";
}

function calculateBmi(weightValue, heightValue) {
  const weight = Number(weightValue);
  const height = Number(heightValue);
  if (!weight || !height) {
    return { value: "-", text: "הזן משקל וגובה כדי לחשב BMI." };
  }
  const bmi = weight / ((height / 100) ** 2);
  return {
    value: bmi.toFixed(1),
    text: `הטווח שלך כרגע הוא ${getBmiCategory(bmi)}.`,
  };
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) return "תת משקל";
  if (bmi < 25) return "משקל תקין";
  if (bmi < 30) return "עודף משקל";
  return "השמנה";
}

function calculateProteinRange(weightValue) {
  const weight = Number(weightValue);
  if (!weight) {
    return { min: "-", max: "-", text: "הזן משקל כדי לקבל טווח יומי מומלץ." };
  }
  const min = weight * 1.6;
  const max = weight * 2.2;
  return {
    min: `${min.toFixed(0)} גרם`,
    max: `${max.toFixed(0)} גרם`,
    text: `כדי לתמוך בעלייה במסת שריר, כוון בערך ל-${min.toFixed(0)} עד ${max.toFixed(0)} גרם חלבון ביום.`,
  };
}

function calculateOneRm(weightValue, repsValue) {
  const weight = Number(weightValue);
  const reps = Number(repsValue);
  if (!weight || !reps) {
    return { value: "-", text: "הזן משקל וחזרות כדי לחשב 1RM משוער." };
  }
  const oneRm = reps <= 1 ? weight : weight * (1 + reps / 30);
  return {
    value: `${oneRm.toFixed(1)} ק\"ג`,
    text: `הערכה לפי נוסחת Epley. זהו חישוב משוער, לא תחליף לבדיקה אמיתית עם בטיחות.`,
  };
}

function calculateCalories(calculator) {
  const weight = Number(calculator.weight);
  const height = Number(calculator.height);
  const age = Number(calculator.age);
  const activity = Number(calculator.activity || 1.55);
  if (!weight || !height || !age) {
    return { bmr: "-", maintenance: "-", target: "-", text: "הזן את הנתונים כדי לקבל הערכת קלוריות יומית." };
  }
  const sexAdjustment = calculator.sex === "female" ? -161 : 5;
  const bmr = (10 * weight) + (6.25 * height) - (5 * age) + sexAdjustment;
  const maintenance = bmr * activity;
  const goalAdjustment = calculator.goal === "bulk" ? 250 : calculator.goal === "cut" ? -300 : 0;
  const target = maintenance + goalAdjustment;
  const goalText = calculator.goal === "bulk" ? "לעלייה במסת שריר" : calculator.goal === "cut" ? "לחיטוב" : "לשמירה";
  return {
    bmr: `${Math.round(bmr)} קק\"ל`,
    maintenance: `${Math.round(maintenance)} קק\"ל`,
    target: `${Math.round(target)} קק\"ל`,
    text: `לפי הנתונים שלך, יעד יומי משוער ${goalText} הוא בערך ${Math.round(target)} קלוריות.`,
  };
}

function getBmiChipText() {
  return calculateBmi(state.calculators.bmi.weight, state.calculators.bmi.height).value;
}

function getProteinChipText() {
  const result = calculateProteinRange(state.calculators.protein.weight);
  return result.min === "-" ? "-" : `${result.min} - ${result.max}`;
}

function getOneRmChipText() {
  return calculateOneRm(state.calculators.oneRm.weight, state.calculators.oneRm.reps).value;
}

function getCaloriesChipText() {
  return calculateCalories(state.calculators.calories).target;
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
      state.editingWorkoutDetails = false;
      persist();
      render();
    });
    elements.workoutTabs.appendChild(button);
  });
}

function renderLibrary() {
  const query = elements.librarySearch.value.trim().toLowerCase();
  const filtered = EXERCISE_LIBRARY.filter((exercise) =>
    [exercise.name, exercise.englishName, exercise.group, exercise.equipment, exercise.notes].some((value) => String(value).toLowerCase().includes(query))
  );
  elements.libraryCount.textContent = `${filtered.length} תרגילים`;
  elements.libraryList.innerHTML = "";
  filtered.forEach((exercise) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "library-item";
    button.innerHTML = `
      <div class="library-item-media">
        <img class="library-item-image" src="${escapeAttribute(getExerciseImage(exercise))}" alt="${escapeAttribute(exercise.name || "תרגיל")}">
      </div>
      <div class="library-item-content">
        <strong>${escapeHtml(exercise.name)}</strong>
        <small>${escapeHtml(exercise.englishName || "")}</small>
        <small>${escapeHtml(exercise.group)} · ${escapeHtml(exercise.equipment)} · ${escapeHtml(exercise.difficulty)}</small>
      </div>
    `;
    const libraryImage = button.querySelector(".library-item-image");
    if (libraryImage) {
      libraryImage.addEventListener("error", () => {
        libraryImage.src = createExerciseIllustration(exercise);
      }, { once: true });
    }
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

function renderWorkoutWeek() {
  if (!elements.workoutWeekLabel) return;
  const anchorIso = state.workoutWeekDate || formatIsoDate(today);
  const start = getWeekStart(new Date(`${anchorIso}T00:00:00`));
  const defaultDate = state.selectedWorkoutLogDate || anchorIso;
  state.selectedWorkoutLogDate = defaultDate;
  elements.workoutWeekLabel.textContent = formatWeekLabel(start);
  if (elements.workoutWeekSubtitle) {
    elements.workoutWeekSubtitle.textContent = formatWorkoutWeekSubtitle(start);
  }
  if (elements.workoutWeekChips) {
    renderWorkoutWeekChips(start);
  }
  if (elements.workoutWeekPreview) {
    elements.workoutWeekPreview.classList.toggle("hidden", Boolean(state.editingWorkoutWeek));
  }
  if (elements.workoutWeekBody) {
    elements.workoutWeekBody.classList.toggle("hidden", !state.editingWorkoutWeek);
  }
  if (!elements.workoutWeekDays) return;
  elements.workoutWeekDays.innerHTML = "";
  for (let i = 0; i < 7; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = formatIsoDate(date);
    const workoutLog = state.workoutLog?.[iso];
    const card = document.createElement("div");
    card.className = "workout-week-day";
    if (iso === formatIsoDate(today)) card.classList.add("today");
    if (workoutLog?.workoutName) card.classList.add("done");
    if (iso === state.selectedWorkoutLogDate) card.classList.add("selected");
    card.innerHTML = `
      <span class="workout-week-day-name">${formatWeekdayShort(date)}</span>
      <strong class="workout-week-day-number">${date.getDate()}</strong>
      <small class="workout-week-day-text">${escapeHtml(workoutLog?.workoutName || "מנוחה")}</small>
    `;
    card.addEventListener("click", () => {
      state.selectedWorkoutLogDate = iso;
      state.editingWorkoutWeek = true;
      persist();
      renderWorkoutWeek();
    });
    elements.workoutWeekDays.appendChild(card);
  }
  renderWorkoutWeekEditor();
}

function renderWorkoutWeekEditor() {
  if (!elements.workoutWeekSelectedDate || !elements.workoutWeekSelect) return;
  const iso = state.selectedWorkoutLogDate || formatIsoDate(today);
  const currentLog = state.workoutLog?.[iso];
  elements.workoutWeekSelectedDate.textContent = `עריכת יום · ${formatHumanDate(iso)}`;
  elements.workoutWeekSelect.innerHTML = "";
  const restOption = document.createElement("option");
  restOption.value = "";
  restOption.textContent = "מנוחה";
  elements.workoutWeekSelect.appendChild(restOption);
  state.workouts.forEach((workout) => {
    const option = document.createElement("option");
    option.value = workout.id;
    option.textContent = workout.name || "אימון ללא שם";
    if (currentLog?.workoutId === workout.id) option.selected = true;
    elements.workoutWeekSelect.appendChild(option);
  });
  if (!currentLog?.workoutId) {
    elements.workoutWeekSelect.value = "";
  }
  renderWorkoutWeekDetails();
}

function renderWorkoutWeekChips(start) {
  elements.workoutWeekChips.innerHTML = "";
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return formatIsoDate(date);
  });
  const trainingDays = days.filter((iso) => state.workoutLog?.[iso]?.workoutName).length;
  const restDays = 7 - trainingDays;
  const selectedIso = state.selectedWorkoutLogDate || formatIsoDate(today);
  const selectedText = state.workoutLog?.[selectedIso]?.workoutName || "מנוחה";
  [
    `ימי אימון: ${trainingDays}`,
    `ימי מנוחה: ${restDays}`,
    `יום נבחר: ${selectedText}`,
  ].forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.workoutWeekChips.appendChild(chip);
  });
}

function formatWorkoutWeekSubtitle(start) {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return formatIsoDate(date);
  });
  const trainingDays = days.filter((iso) => state.workoutLog?.[iso]?.workoutName).length;
  return trainingDays ? `${trainingDays} ימי אימון נשמרו בשבוע הזה.` : "עדיין לא נשמרו אימונים בשבוע הזה.";
}

function saveWorkoutWeekSelection() {
  const iso = state.selectedWorkoutLogDate || formatIsoDate(today);
  const selectedWorkoutId = elements.workoutWeekSelect?.value || "";
  if (!selectedWorkoutId) {
    delete state.workoutLog[iso];
  } else {
    const workout = state.workouts.find((item) => item.id === selectedWorkoutId);
    if (!workout) return;
    const detailEntries = readWorkoutWeekExerciseEntries();
    state.workoutLog[iso] = {
      workoutId: workout.id,
      workoutName: workout.name || "אימון ללא שם",
      exercises: workout.exercises.map((exercise) => exercise.name || "תרגיל ללא שם"),
      exerciseEntries: detailEntries.length ? detailEntries : buildWorkoutLogExerciseEntries(workout),
    };
  }
  persist();
  renderWorkoutWeek();
  pulseButton(elements.saveWorkoutWeekBtn, "נשמר");
}

function renderWorkoutWeekDetails() {
  if (!elements.workoutWeekDetails || !elements.workoutWeekDetailsTitle) return;
  const iso = state.selectedWorkoutLogDate || formatIsoDate(today);
  const workoutLog = state.workoutLog?.[iso];
  elements.workoutWeekDetails.innerHTML = "";
  const selectedWorkoutId = elements.workoutWeekSelect?.value || workoutLog?.workoutId || "";
  if (!selectedWorkoutId) {
    elements.workoutWeekDetailsTitle.textContent = `פרטי היום · ${formatHumanDate(iso)}`;
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>מנוחה</strong><small>לא נשמר אימון ליום הזה.</small>";
    elements.workoutWeekDetails.appendChild(empty);
    return;
  }
  const workout = state.workouts.find((item) => item.id === selectedWorkoutId);
  const workoutName = workoutLog?.workoutId === selectedWorkoutId ? workoutLog.workoutName : (workout?.name || "אימון ללא שם");
  elements.workoutWeekDetailsTitle.textContent = `${workoutName} · ${formatHumanDate(iso)}`;
  const entries = getWorkoutWeekDetailEntries(workout, workoutLog);
  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>אין פירוט תרגילים</strong><small>היום שמור כאימון, אבל לא נשמר פירוט תרגילים.</small>";
    elements.workoutWeekDetails.appendChild(empty);
    return;
  }
  entries.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <strong>${escapeHtml(entry.name)}</strong>
      <small>${escapeHtml((entry.sets || []).map((set) => `סט ${set.setNumber}: ${set.weight || "-"} ק"ג x ${set.reps || "-"}`).join(" · ") || "עדיין אין סטים שמורים")}</small>
      <div class="set-tracker workout-log-set-tracker">
        <div class="set-tracker-header">
          <span>סט</span>
          <span>משקל</span>
          <span>חזרות</span>
        </div>
        <div class="set-rows workout-log-set-rows"></div>
      </div>
    `;
    renderSetRows(item.querySelector(".workout-log-set-rows"), entry.sets);
    elements.workoutWeekDetails.appendChild(item);
  });
}

function getWorkoutLogExercises(workoutLog) {
  if (Array.isArray(workoutLog?.exercises) && workoutLog.exercises.length) {
    return workoutLog.exercises;
  }
  const workout = state.workouts.find((item) => item.id === workoutLog?.workoutId);
  return workout ? workout.exercises.map((exercise) => exercise.name || "תרגיל ללא שם") : [];
}

function getWorkoutWeekDetailEntries(workout, workoutLog) {
  if (Array.isArray(workoutLog?.exerciseEntries) && workoutLog.exerciseEntries.length) {
    return workoutLog.exerciseEntries;
  }
  if (!workout) return [];
  return buildWorkoutLogExerciseEntries(workout);
}

function buildWorkoutLogExerciseEntries(workout) {
  return workout.exercises.map((exercise) => ({
    exerciseId: exercise.id,
    name: exercise.name || "תרגיל ללא שם",
    sets: buildPerformedSets(exercise),
  }));
}

function readWorkoutWeekExerciseEntries() {
  if (!elements.workoutWeekDetails) return [];
  return Array.from(elements.workoutWeekDetails.querySelectorAll(".history-item")).map((item) => ({
    name: item.querySelector("strong")?.textContent || "תרגיל ללא שם",
    sets: readSetRows(item.querySelector(".workout-log-set-rows")),
  }));
}

function renderCalendar() {
  const selectedDate = new Date(`${state.selectedNutritionDate}T00:00:00`);
  const start = getWeekStart(selectedDate);
  elements.prevMonthBtn.textContent = "שבוע קודם";
  elements.nextMonthBtn.textContent = "שבוע הבא";
  elements.calendarMonthLabel.textContent = formatWeekLabel(start);
  elements.calendarDays.innerHTML = "";

  for (let i = 0; i < 7; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = formatIsoDate(date);
    const entry = state.nutrition[iso];
    const totals = getNutritionTotals(entry);
    const targetStatus = getNutritionTargetStatus(totals, state.profile);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    if (iso === state.selectedNutritionDate) button.classList.add("selected");
    if (iso === formatIsoDate(today)) button.classList.add("today");
    if (entry && hasNutritionData(entry)) button.classList.add("has-data");
    if (targetStatus === "hit") button.classList.add("target-hit");
    if (targetStatus === "miss") button.classList.add("target-miss");
    button.innerHTML = `
      <span class="calendar-day-name">${formatWeekdayShort(date)}</span>
      <span class="calendar-day-number">${date.getDate()}</span>
      <div class="calendar-day-meta">
        <span>${totals.calories ? `${totals.calories} קק"ל` : "ללא קלוריות"}</span>
        <span>${totals.protein ? `${totals.protein} גרם חלבון` : "ללא חלבון"}</span>
      </div>
    `;
    button.addEventListener("click", () => {
      state.selectedNutritionDate = iso;
      state.calendarMonth = formatMonthKey(date);
      persist();
      renderCalendar();
      renderNutritionForm();
    });
    elements.calendarDays.appendChild(button);
  }
}

function renderNutritionForm() {
  const iso = state.selectedNutritionDate;
  const entry = state.nutrition[iso] || { items: [], notes: "", morningWeight: "" };
  const totals = getNutritionTotals(entry);
  const targetSummary = getNutritionTargetSummary(totals, state.profile);
  elements.nutritionSelectedDate.textContent = `מעקב יומי · ${formatHumanDate(iso)}`;
  elements.nutritionStatus.textContent = `${totals.calories} קק"ל`;
  elements.dailyCaloriesValue.textContent = totals.calories;
  elements.dailyProteinValue.textContent = totals.protein;
  if (elements.nutritionTargetStatus) {
    elements.nutritionTargetStatus.textContent = targetSummary.text;
    elements.nutritionTargetStatus.className = `target-status-card ${targetSummary.statusClass}`;
  }
  elements.foodName.value = "";
  elements.foodAmount.value = "";
  elements.foodCalories.value = "";
  elements.foodProtein.value = "";
  elements.morningWeight.value = entry.morningWeight || "";
  elements.dailyNutritionNotes.value = entry.notes || "";
  renderFoodList(entry.items || []);
}

function saveNutritionForSelectedDate() {
  const entry = ensureNutritionEntry(state.selectedNutritionDate);
  entry.notes = elements.dailyNutritionNotes.value;
  entry.morningWeight = elements.morningWeight.value;
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
    const isEditing = state.editingFoodItemId === item.id;
    if (isEditing) {
      card.innerHTML = `
        <div class="food-item-edit-grid">
          <label class="wide-field"><span class="label">מה אכלת</span><input class="text-input edit-food-name" type="text" value="${escapeAttribute(item.name)}"></label>
          <label><span class="label">כמות / גרם</span><input class="text-input edit-food-amount" type="text" value="${escapeAttribute(item.amount || "")}"></label>
          <label><span class="label">קלוריות</span><input class="text-input edit-food-calories" type="number" min="0" step="1" value="${escapeAttribute(item.calories || 0)}"></label>
          <label><span class="label">חלבון</span><input class="text-input edit-food-protein" type="number" min="0" step="1" value="${escapeAttribute(item.protein || 0)}"></label>
        </div>
        <div class="food-item-actions">
          <button class="ghost-btn save-food-btn" type="button">שמור</button>
          <button class="icon-btn cancel-food-btn" type="button">ביטול</button>
          <button class="icon-btn food-delete-btn" type="button">מחק</button>
        </div>
      `;
      card.querySelector(".save-food-btn").addEventListener("click", () => {
        const entry = ensureNutritionEntry(state.selectedNutritionDate);
        const foodItem = entry.items.find((entryItem) => entryItem.id === item.id);
        if (!foodItem) return;
        foodItem.name = card.querySelector(".edit-food-name").value.trim();
        foodItem.amount = card.querySelector(".edit-food-amount").value.trim();
        foodItem.calories = Number(card.querySelector(".edit-food-calories").value || 0);
        foodItem.protein = Number(card.querySelector(".edit-food-protein").value || 0);
        state.editingFoodItemId = null;
        persist();
        renderCalendar();
        renderNutritionForm();
      });
      card.querySelector(".cancel-food-btn").addEventListener("click", () => {
        state.editingFoodItemId = null;
        persist();
        renderNutritionForm();
      });
    } else {
      card.innerHTML = `
        <div class="food-item-top">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <small>${escapeHtml(item.amount || "ללא כמות")}</small>
          </div>
          <div class="food-item-actions">
            <button class="ghost-btn edit-food-btn" type="button">ערוך</button>
            <button class="icon-btn food-delete-btn" type="button">מחק</button>
          </div>
        </div>
        <small>${item.calories || 0} קק"ל · ${item.protein || 0} גרם חלבון</small>
      `;
      card.querySelector(".edit-food-btn").addEventListener("click", () => {
        state.editingFoodItemId = item.id;
        persist();
        renderNutritionForm();
      });
    }
    card.querySelector(".food-delete-btn").addEventListener("click", () => {
      const entry = ensureNutritionEntry(state.selectedNutritionDate);
      entry.items = entry.items.filter((entryItem) => entryItem.id !== item.id);
      if (state.editingFoodItemId === item.id) {
        state.editingFoodItemId = null;
      }
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
    state.nutrition[dateKey] = { items: [], notes: "", morningWeight: "" };
  }
  if (!Array.isArray(state.nutrition[dateKey].items)) {
    state.nutrition[dateKey].items = [];
  }
  if (state.nutrition[dateKey].morningWeight === undefined) {
    state.nutrition[dateKey].morningWeight = "";
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

function getProgressData(history) {
  const values = history
    .map((entry) => Number(entry.weight || 0))
    .filter((value) => Number.isFinite(value) && value > 0)
    .reverse();

  if (values.length < 2) {
    return {
      values,
      summary: values.length === 1 ? `ביצוע אחרון: ${values[0]} ק"ג` : "אין עדיין מספיק נתונים לגרף",
    };
  }

  const diff = values[values.length - 1] - values[0];
  const trend = diff > 0 ? `שיפור של ${diff.toFixed(1)} ק"ג` : diff < 0 ? `ירידה של ${Math.abs(diff).toFixed(1)} ק"ג` : "יציב ללא שינוי";
  return { values, summary: trend };
}

function renderProgressChart(values) {
  if (!values.length) {
    return `<div class="history-item"><small>שמור לפחות ביצוע אחד כדי לראות גרף התקדמות.</small></div>`;
  }

  if (values.length === 1) {
    return `<div class="history-item"><small>נשמר משקל אחרון: ${values[0]} ק"ג. צריך עוד אימון אחד לפחות לגרף.</small></div>`;
  }

  const width = 320;
  const height = 120;
  const padding = 16;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (values.length - 1);
  const points = values
    .map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="גרף התקדמות">
      <polyline fill="none" stroke="rgba(122, 201, 255, 0.25)" stroke-width="2" points="${padding},${height - padding} ${width - padding},${height - padding}" />
      <polyline fill="none" stroke="#7ac9ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${points}" />
      ${values
        .map((value, index) => {
          const x = padding + index * stepX;
          const y = height - padding - ((value - min) / range) * (height - padding * 2);
          return `<circle cx="${x}" cy="${y}" r="4.5" fill="#ef7d33"></circle>`;
        })
        .join("")}
    </svg>
  `;
}

function hasNutritionData(entry) {
  return Boolean(entry && ((entry.items && entry.items.length) || entry.notes));
}

function getNutritionTargetStatus(totals, profile) {
  const caloriesTarget = Number(profile?.dailyCaloriesTarget || 0);
  const proteinTarget = Number(profile?.dailyProteinTarget || 0);
  if (!caloriesTarget && !proteinTarget) return "none";
  const hasCaloriesGoal = caloriesTarget > 0;
  const hasProteinGoal = proteinTarget > 0;
  const hitCalories = !hasCaloriesGoal || totals.calories >= caloriesTarget;
  const hitProtein = !hasProteinGoal || totals.protein >= proteinTarget;
  return hitCalories && hitProtein ? "hit" : "miss";
}

function getNutritionTargetSummary(totals, profile) {
  const caloriesTarget = Number(profile?.dailyCaloriesTarget || 0);
  const proteinTarget = Number(profile?.dailyProteinTarget || 0);
  if (!caloriesTarget && !proteinTarget) {
    return { text: "עדיין לא הוגדר יעד יומי לקלוריות או חלבון.", statusClass: "" };
  }
  const caloriesRemaining = Math.max(caloriesTarget - totals.calories, 0);
  const proteinRemaining = Math.max(proteinTarget - totals.protein, 0);
  const status = getNutritionTargetStatus(totals, profile);
  if (status === "hit") {
    return { text: "עמדת ביעד היומי. היום מסומן בירוק בלוח.", statusClass: "success" };
  }
  const parts = [];
  if (caloriesTarget > 0) parts.push(`נשארו ${caloriesRemaining} קלוריות`);
  if (proteinTarget > 0) parts.push(`נשארו ${proteinRemaining} גרם חלבון`);
  return { text: `${parts.join(" · ")}. היום מסומן באדום עד שתגיע ליעד.`, statusClass: "danger" };
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
  elements.workoutDetailsTitle.textContent = workout.name || "אימון ללא שם";
  elements.workoutDetailsSubtitle.textContent = workout.focus || "לחץ כדי להוסיף מיקוד, מטרה והערות.";
  renderDetailChips(workout);
  const isEditingWorkoutDetails = Boolean(state.editingWorkoutDetails);
  elements.workoutDetailsPreview.classList.toggle("hidden", isEditingWorkoutDetails);
  elements.workoutDetailsBody.classList.toggle("hidden", !isEditingWorkoutDetails);
  elements.exerciseList.innerHTML = "";

  workout.exercises.forEach((exercise, index) => {
    const fragment = elements.exerciseTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".exercise-card");
    const previewButton = fragment.querySelector(".exercise-preview");
    const body = fragment.querySelector(".exercise-body");
    fragment.querySelector(".exercise-title").textContent = exercise.name || `תרגיל ${index + 1}`;
    fragment.querySelector(".exercise-subtitle").textContent = formatExercisePreviewSubtitle(exercise);
    fragment.querySelector(".exercise-group-pill").textContent = exercise.group || "תרגיל";

    const image = fragment.querySelector(".exercise-image");
    image.src = getExerciseImage(exercise);
    image.alt = exercise.name ? `תמונה של ${exercise.name}${exercise.englishName ? ` / ${exercise.englishName}` : ""}` : "תמונה של תרגיל";
    image.addEventListener("error", () => {
      image.src = createExerciseIllustration(exercise);
    }, { once: true });

    bindValue(fragment, ".exercise-name", exercise.name, (value) => {
      exercise.name = value;
      if (!exercise.englishName) {
        exercise.englishName = inferExerciseEnglishName(value);
      }
      persist();
    });
    bindValue(fragment, ".exercise-english-name", exercise.englishName, (value) => {
      exercise.englishName = value;
      persist();
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
    fragment.querySelector(".exercise-weight-chip").textContent = exercise.goalWeight
      ? `${exercise.weight || "-"} ק"ג נוכחי · יעד ${exercise.goalWeight} ק"ג`
      : `${exercise.weight || "-"} ק"ג יעד`;
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

    const progressSummary = fragment.querySelector(".progress-summary");
    const progressChart = fragment.querySelector(".progress-chart");
    const progressData = getProgressData(exercise.history);
    progressSummary.textContent = progressData.summary;
    progressChart.innerHTML = renderProgressChart(progressData.values);

    const sessionNotes = fragment.querySelector(".session-notes");
    sessionNotes.value = "";
    const setRows = fragment.querySelector(".set-rows");
    const performedSets = buildPerformedSets(exercise);
    renderSetRows(setRows, performedSets);

    fragment.querySelector(".log-session-btn").addEventListener("click", () => {
      const savedSets = readSetRows(setRows);
      const topSetWeight = savedSets.reduce((max, item) => Math.max(max, Number(item.weight || 0)), 0);
      const repsSummary = savedSets.map((item) => item.reps || "-").join(", ");
      exercise.weight = topSetWeight || exercise.weight;
      exercise.lastPerformedSets = savedSets;
      const workoutDateKey = formatIsoDate(new Date());
      state.workoutLog[workoutDateKey] = {
        workoutId: workout.id,
        workoutName: workout.name || "אימון ללא שם",
        exercises: workout.exercises.map((item) => item.name || "תרגיל ללא שם"),
        exerciseEntries: workout.exercises.map((item) => ({
          exerciseId: item.id,
          name: item.name || "תרגיל ללא שם",
          sets: item.id === exercise.id ? savedSets : buildPerformedSets(item),
        })),
      };
      exercise.history.unshift({
        date: new Date().toISOString(),
        weight: topSetWeight || "",
        reps: repsSummary,
        notes: sessionNotes.value,
        sets: savedSets,
      });
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

    renderHistory(fragment.querySelector(".history-list"), exercise);
    elements.exerciseList.appendChild(card);
  });
}

function renderHistory(container, exercise) {
  container.innerHTML = "";
  const history = exercise.history || [];
  if (!history.length) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = "<strong>עדיין אין ביצוע שמור</strong><small>שמור אימון בפועל כדי לראות היסטוריה כאן.</small>";
    container.appendChild(empty);
    return;
  }
  history.forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div class="history-item-top">
        <strong>${formatDate(entry.date)} · ${escapeHtml(entry.weight || "-")} ק"ג · ${escapeHtml(entry.reps || "-")}</strong>
        <button type="button" class="ghost-btn history-delete-btn">מחק רישום</button>
      </div>
      <small>${escapeHtml(entry.notes || "ללא הערות")}</small>
    `;
    item.querySelector(".history-delete-btn").addEventListener("click", () => {
      exercise.history.splice(index, 1);
      persist();
      render();
    });
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
}

function bindValue(fragment, selector, value, handler, eventName = "input") {
  const input = fragment.querySelector(selector);
  input.value = value ?? "";
  input.addEventListener(eventName, (event) => handler(event.target.value));
}

function buildPerformedSets(exercise) {
  if (Array.isArray(exercise.lastPerformedSets) && exercise.lastPerformedSets.length) {
    return exercise.lastPerformedSets.map((item, index) => ({
      setNumber: index + 1,
      weight: item.weight || "",
      reps: item.reps || "",
    }));
  }

  const count = Math.max(Number(exercise.sets || 0), 1);
  return Array.from({ length: count }, (_, index) => ({
    setNumber: index + 1,
    weight: exercise.weight || "",
    reps: "",
  }));
}

function renderSetRows(container, sets) {
  container.innerHTML = "";
  sets.forEach((set) => {
    const row = document.createElement("div");
    row.className = "set-row";
    row.innerHTML = `
      <span class="set-badge">סט ${set.setNumber}</span>
      <input class="text-input set-weight-input" type="number" min="0" step="0.5" placeholder="ק\"ג" value="${escapeAttribute(set.weight)}">
      <input class="text-input set-reps-input" type="text" placeholder="חזרות" value="${escapeAttribute(set.reps)}">
    `;
    container.appendChild(row);
  });
}

function readSetRows(container) {
  return Array.from(container.querySelectorAll(".set-row")).map((row, index) => ({
    setNumber: index + 1,
    weight: row.querySelector(".set-weight-input")?.value || "",
    reps: row.querySelector(".set-reps-input")?.value || "",
  }));
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
      profile: {
        weight: parsed.profile?.weight || "",
        height: parsed.profile?.height || "",
        birthDate: parsed.profile?.birthDate || "",
        dailyCaloriesTarget: parsed.profile?.dailyCaloriesTarget || "",
        dailyProteinTarget: parsed.profile?.dailyProteinTarget || "",
      },
      activeWorkoutId: parsed.activeWorkoutId || workouts[0].id,
      workouts,
      nutrition,
      workoutLog: parsed.workoutLog && typeof parsed.workoutLog === "object" ? parsed.workoutLog : {},
      selectedNutritionDate: parsed.selectedNutritionDate || formatIsoDate(today),
      calendarMonth: parsed.calendarMonth || formatMonthKey(today),
      workoutWeekDate: parsed.workoutWeekDate || formatIsoDate(today),
      selectedWorkoutLogDate: parsed.selectedWorkoutLogDate || formatIsoDate(today),
      currentView: parsed.currentView || "workouts",
      timer: normalizeTimer(parsed.timer),
      ai: normalizeAi(parsed.ai),
      calculators: normalizeCalculators(parsed.calculators, parsed.profile),
      editingExerciseId: parsed.editingExerciseId || null,
      editingWorkoutDetails: Boolean(parsed.editingWorkoutDetails),
      editingFoodItemId: parsed.editingFoodItemId || null,
      editingProfile: Boolean(parsed.editingProfile),
      editingWorkoutWeek: Boolean(parsed.editingWorkoutWeek),
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
    profile: { weight: "", height: "", birthDate: "", dailyCaloriesTarget: "", dailyProteinTarget: "" },
    activeWorkoutId: workout.id,
    workouts: [workout],
    nutrition: {},
    workoutLog: {},
    selectedNutritionDate: formatIsoDate(today),
    calendarMonth: formatMonthKey(today),
    workoutWeekDate: formatIsoDate(today),
    selectedWorkoutLogDate: formatIsoDate(today),
    currentView: "workouts",
    timer: normalizeTimer({}),
    ai: normalizeAi({}),
    calculators: normalizeCalculators({}, { weight: "", height: "", birthDate: "" }),
    editingExerciseId: null,
    editingWorkoutDetails: false,
    editingFoodItemId: null,
    editingProfile: false,
    editingWorkoutWeek: false,
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
      morningWeight: entry.morningWeight || "",
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

function normalizeCalculators(calculators, profile) {
  const age = getAgeFromBirthDate(profile?.birthDate || "");
  return {
    active: calculators?.active || null,
    bmi: {
      weight: calculators?.bmi?.weight || profile?.weight || "",
      height: calculators?.bmi?.height || profile?.height || "",
    },
    protein: {
      weight: calculators?.protein?.weight || profile?.weight || "",
    },
    oneRm: {
      weight: calculators?.oneRm?.weight || "",
      reps: calculators?.oneRm?.reps || "",
    },
    calories: {
      weight: calculators?.calories?.weight || profile?.weight || "",
      height: calculators?.calories?.height || profile?.height || "",
      age: calculators?.calories?.age || age || "",
      sex: calculators?.calories?.sex || "male",
      activity: calculators?.calories?.activity || "1.55",
      goal: calculators?.calories?.goal || "maintain",
    },
  };
}

function normalizeTimer(timer) {
  const selectedSeconds = Number(timer?.selectedSeconds || 120);
  return {
    selectedSeconds,
    remainingSeconds: Number(timer?.remainingSeconds ?? selectedSeconds),
    isRunning: false,
    finished: Boolean(timer?.finished),
  };
}

function normalizeAi(ai) {
  return {
    provider: ai?.provider || "gemini",
    models: {
      gemini: ai?.models?.gemini || ai?.model || "gemini-2.5-flash",
      openai: ai?.models?.openai || "gpt-5-mini",
      anthropic: ai?.models?.anthropic || "claude-3-5-haiku-latest",
    },
    editMode: ai?.editMode ?? true,
    imageModel: ai?.imageModel || "gemini-2.5-flash-image",
    messages: Array.isArray(ai?.messages)
      ? ai.messages.map((message) => ({
          role: message.role === "model" ? "model" : "user",
          text: message.text || "",
          provider: message.provider || "gemini",
          actionsApplied: Array.isArray(message.actionsApplied) ? message.actionsApplied.filter(Boolean) : [],
        }))
      : [],
    generatedImages: Array.isArray(ai?.generatedImages)
      ? ai.generatedImages.map((image) => ({
          id: image.id || crypto.randomUUID(),
          prompt: image.prompt || "",
          model: image.model || "gemini-2.5-flash-image",
          dataUrl: image.dataUrl || "",
          fileName: image.fileName || `gemini-image-${Date.now()}.png`,
        })).filter((image) => image.dataUrl)
      : [],
    isLoading: false,
    status: ai?.status || getAiProviderNote(ai?.provider || "gemini"),
    statusType: ai?.statusType || (getAiApiKey(ai?.provider || "gemini") ? "" : "danger"),
    isGeneratingImage: false,
    imageStatus: ai?.imageStatus || "כאן תוכל ליצור תמונות עם Nano Banana ולהוריד אותן.",
    imageStatusType: ai?.imageStatusType || "",
  };
}

function normalizeExercise(exercise) {
  const matched = EXERCISE_LIBRARY.find((item) => item.name === exercise.name) || {};
  return createExercise({
    ...matched,
    ...exercise,
    englishName: exercise.englishName || matched.englishName || inferExerciseEnglishName(exercise.name || matched.name || ""),
    history: Array.isArray(exercise.history) ? exercise.history : [],
    lastPerformedSets: Array.isArray(exercise.lastPerformedSets) ? exercise.lastPerformedSets : [],
  });
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
    englishName: data.englishName || "",
    group: data.group || "",
    equipment: data.equipment || "",
    difficulty: data.difficulty || "מתחיל",
    sets: data.sets ?? 3,
    reps: data.reps || "10",
    weight: data.weight ?? "",
    goalWeight: data.goalWeight ?? "",
    rest: data.rest ?? 60,
    notes: data.notes || "",
    imageUrl: data.imageUrl || "",
    videoUrl: data.videoUrl || "",
    history: Array.isArray(data.history) ? data.history : [],
    lastPerformedSets: Array.isArray(data.lastPerformedSets) ? data.lastPerformedSets : [],
  };
}

function presetExercise(name, group, equipment, difficulty, sets, reps, weight, rest, notes, videoUrl) {
  return createExercise({ name, group, equipment, difficulty, sets, reps, weight, rest, notes, videoUrl });
}

const EXERCISE_ENGLISH_NAMES = {
  "בנץ' פרס": "Bench Press",
  "לחיצת חזה בדאמבלים": "Dumbbell Bench Press",
  "פרפר במכונה": "Pec Deck Fly",
  "לחיצת חזה בשיפוע חיובי": "Incline Bench Press",
  "לחיצת חזה בשיפוע שלילי": "Decline Bench Press",
  "קרוס אובר בכבלים": "Cable Crossover",
  "פוש אפ": "Push-Up",
  "חתירה עם מוט": "Barbell Row",
  "פולי עליון": "Lat Pulldown",
  "מתח": "Pull-Up",
  "חתירה בדאמבל יד אחת": "One-Arm Dumbbell Row",
  "חתירה בישיבה בכבל": "Seated Cable Row",
  "טי בר רואו": "T-Bar Row",
  "פולאובר בכבל": "Straight-Arm Pulldown",
  "דדליפט": "Deadlift",
  "לחיצת כתפיים": "Dumbbell Shoulder Press",
  "הרחקת כתפיים": "Lateral Raise",
  "פייס פול": "Face Pull",
  "לחיצת ארנולד": "Arnold Press",
  "הרחקה קדמית": "Front Raise",
  "הרחקת כתף במכונה": "Lateral Raise Machine",
  "רברס פק דק": "Reverse Pec Deck",
  "סקוואט": "Squat",
  "לחיצת רגליים": "Leg Press",
  "דדליפט רומני": "Romanian Deadlift",
  "מכרעיים": "Lunge",
  "סקוואט קדמי": "Front Squat",
  "בולגרי ספליט סקוואט": "Bulgarian Split Squat",
  "פשיטת ברכיים": "Leg Extension",
  "כפיפת ברכיים": "Leg Curl",
  "תאומים בעמידה": "Standing Calf Raise",
  "תאומים בישיבה": "Seated Calf Raise",
  "כפיפת מרפקים": "Dumbbell Curl",
  "האמר קרל": "Hammer Curl",
  "כפיפת מרפקים עם מוט": "Barbell Curl",
  "כפיפת מרפקים בכבל": "Cable Curl",
  "פריצ'ר קרל": "Preacher Curl",
  "פשיטת מרפקים בכבל": "Triceps Pushdown",
  "סקול קראשר": "Skullcrusher",
  "לחיצה צרפתית מעל הראש": "Overhead Triceps Extension",
  "מקבילים": "Dips",
  "היפ תראסט": "Hip Thrust",
  "גלוט ברידג'": "Glute Bridge",
  "קיקבק בכבל": "Cable Glute Kickback",
  "כפיפות בטן בכבל": "Cable Crunch",
  "פלאנק": "Plank",
  "הרמות רגליים בתלייה": "Hanging Leg Raise",
  "ווד צ'ופ בכבל": "Cable Woodchopper",
  "שראג": "Dumbbell Shrug",
  "פארמר ווק": "Farmer's Walk",
  "לחיצת חזה במכונה": "Chest Press Machine",
  "לחיצת חזה בסמית'": "Smith Machine Bench Press",
  "פרפר בדאמבלים": "Dumbbell Fly",
  "פרפר בשיפוע חיובי": "Incline Dumbbell Fly",
  "לחיצת חזה אחיזה צרה": "Close-Grip Bench Press",
  "סבנד פרס": "Svend Press",
  "פולי עליון אחיזה רחבה": "Wide-Grip Lat Pulldown",
  "פולי עליון אחיזה צרה": "Close-Grip Lat Pulldown",
  "חתירה בסמית'": "Smith Machine Row",
  "חתירה בחזה נתמך": "Chest-Supported Row",
  "חתירה במכשיר האמר": "Hammer Strength Row",
  "פנדליי רואו": "Pendlay Row",
  "רק פול": "Rack Pull",
  "צ'ין אפ": "Chin-Up",
  "מתח בסיוע": "Assisted Pull-Up",
  "לחיצת כתפיים במכונה": "Shoulder Press Machine",
  "לחיצת כתפיים עם מוט": "Barbell Shoulder Press",
  "לחיצת כתפיים בסמית'": "Smith Machine Shoulder Press",
  "אפרייט רואו": "Upright Row",
  "הרחקת כתפיים בכבל": "Cable Lateral Raise",
  "הרחקת כתפיים כפיפה קדימה": "Bent-Over Lateral Raise",
  "סקוואט בסמית'": "Smith Machine Squat",
  "גביע סקוואט": "Goblet Squat",
  "האק סקוואט": "Hack Squat",
  "סקוואט פיצול": "Split Squat",
  "סטפ אפ": "Step-Up",
  "סומו סקוואט": "Sumo Squat",
  "הליכת מכרעיים": "Walking Lunge",
  "דדליפט סומו": "Sumo Deadlift",
  "גוד מורנינג": "Good Morning",
  "כפיפת ברכיים בעמידה": "Standing Leg Curl",
  "כפיפת ברכיים בישיבה": "Seated Leg Curl",
  "דונקי קאלף רייז": "Donkey Calf Raise",
  "תאומים בלג פרס": "Leg Press Calf Raise",
  "כפיפת מרפקים בשיפוע": "Incline Dumbbell Curl",
  "קונסנטריישן קרל": "Concentration Curl",
  "ספיידר קרל": "Spider Curl",
  "כפיפת מרפקים הפוכה": "Reverse Curl",
  "כפיפת מרפקים בכבל מעל הראש": "High Cable Curl",
  "פשיטת מרפקים בחבל": "Rope Triceps Pushdown",
  "דיפ במכונה": "Machine Dip",
  "קיקבק טרייספס": "Triceps Kickback",
  "פשיטת מרפק יד אחת בכבל": "Single-Arm Triceps Pushdown",
  "לחיצה צרפתית בשכיבה": "Lying Triceps Extension",
  "היפ אבדקשן": "Hip Abduction Machine",
  "היפ אדאקשן": "Hip Adduction Machine",
  "קייבל פול ת'רו": "Cable Pull-Through",
  "הרמות אגן רגל אחת": "Single-Leg Glute Bridge",
  "דד באג": "Dead Bug",
  "אופניים לבטן": "Bicycle Crunch",
  "הרמות ברכיים בקפטן צ'ר": "Captain's Chair Knee Raise",
  "אב וויל": "Ab Wheel Rollout",
  "סייד פלאנק": "Side Plank",
  "רשן טוויסט": "Russian Twist",
  "שראג עם מוט": "Barbell Shrug",
  "חתירה גבוהה בכבל": "Cable High Row",
  "פארמר ווק חד צדדי": "Suitcase Carry",
  "תלייה לאחיזה": "Dead Hang",
  "כפיפת שורש כף יד": "Wrist Curl",
  "כפיפת שורש כף יד הפוכה": "Reverse Wrist Curl",
  "דחיפת מזחלת": "Sled Push",
  "משיכת מזחלת": "Sled Pull",
  "קטלבל סווינג": "Kettlebell Swing",
  "תראסטר": "Thruster",
  "ברפיז": "Burpee",
  "טורקיש גט אפ": "Turkish Get-Up"
};

function inferExerciseEnglishName(name) {
  return EXERCISE_ENGLISH_NAMES[name] || "";
}

EXERCISE_LIBRARY.forEach((exercise) => {
  if (!exercise.englishName) {
    exercise.englishName = inferExerciseEnglishName(exercise.name);
  }
});

function formatExercisePreviewSubtitle(exercise) {
  const parts = [];
  if (exercise.englishName) parts.push(exercise.englishName);
  if (exercise.equipment) parts.push(exercise.equipment);
  if (exercise.difficulty) parts.push(exercise.difficulty);
  return parts.join(" · ");
}

function getExerciseImage(exercise) {
  return exercise.imageUrl || createExerciseIllustration(exercise);
}

function createExerciseIllustration(exercise) {
  const palette = getPalette(exercise.group);
  const title = encodeXml(exercise.name || "GymFlow");
  const group = encodeXml(exercise.group || "Exercise");
  const equipment = encodeXml(exercise.equipment || "Training");
  const visual = getExerciseVisualPreset(exercise);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${palette[0]}"/>
        <stop offset="100%" stop-color="${palette[1]}"/>
      </linearGradient>
      <linearGradient id="floor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="700" rx="48" fill="url(#bg)"/>
    <circle cx="1010" cy="110" r="150" fill="rgba(255,255,255,0.12)"/>
    <circle cx="180" cy="590" r="180" fill="rgba(255,255,255,0.08)"/>
    <path d="M0 540 C180 500 320 575 485 555 C625 537 736 462 920 498 C1038 522 1128 580 1200 566 V700 H0 Z" fill="rgba(8,17,31,0.28)"/>
    <rect x="84" y="86" width="232" height="48" rx="24" fill="rgba(255,255,255,0.16)"/>
    <text x="200" y="118" text-anchor="middle" fill="white" font-size="26" font-family="Heebo, Arial, sans-serif" font-weight="700">${group}</text>
    <g transform="translate(0 8)">
      <ellipse cx="610" cy="608" rx="284" ry="28" fill="rgba(0,0,0,0.16)"/>
      <rect x="322" y="576" width="576" height="18" rx="9" fill="url(#floor)"/>
      ${visual}
    </g>
    <text x="72" y="612" fill="white" font-size="60" font-family="Rubik, Arial, sans-serif" font-weight="800">${title}</text>
    <text x="72" y="658" fill="rgba(255,255,255,0.88)" font-size="30" font-family="Heebo, Arial, sans-serif">${equipment}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getExerciseVisualPreset(exercise) {
  const text = `${exercise.name || ""} ${exercise.englishName || ""} ${exercise.group || ""} ${exercise.equipment || ""}`.toLowerCase();
  if (text.includes("בנץ") || text.includes("bench") || text.includes("לחיצת חזה")) {
    return `
      <rect x="400" y="472" width="420" height="22" rx="11" fill="rgba(255,255,255,0.22)"/>
      <rect x="430" y="494" width="26" height="84" rx="12" fill="rgba(255,255,255,0.18)"/>
      <rect x="764" y="494" width="26" height="84" rx="12" fill="rgba(255,255,255,0.18)"/>
      <path d="M454 430 L514 430 L566 358 L650 358 L704 430 L766 430" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="606" cy="322" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M542 360 L494 430 M670 360 L718 430 M592 356 L564 424 M620 356 L648 424" fill="none" stroke="rgba(255,255,255,0.84)" stroke-width="18" stroke-linecap="round"/>
      <path d="M468 278 H744" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="18" stroke-linecap="round"/>
      <path d="M498 260 V298 M714 260 V298" fill="none" stroke="rgba(255,255,255,0.84)" stroke-width="14" stroke-linecap="round"/>
      <circle cx="468" cy="278" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
      <circle cx="744" cy="278" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
    `;
  }
  if (text.includes("סקוואט") || text.includes("squat") || text.includes("לחיצת רגליים") || text.includes("leg press")) {
    return `
      <path d="M522 226 V522 M690 226 V522" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="16" stroke-linecap="round"/>
      <path d="M474 248 H738" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="18" stroke-linecap="round"/>
      <circle cx="606" cy="224" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 252 L606 352 L546 424 M606 352 L676 424 M548 296 L486 336 M664 296 L726 336" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M456 248 H756" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="16" stroke-linecap="round"/>
      <circle cx="432" cy="248" r="24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="12"/>
      <circle cx="780" cy="248" r="24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="12"/>
    `;
  }
  if (text.includes("דדליפט") || text.includes("deadlift") || text.includes("row") || text.includes("חתירה")) {
    return `
      <path d="M426 458 H786" fill="none" stroke="rgba(255,255,255,0.94)" stroke-width="18" stroke-linecap="round"/>
      <circle cx="386" cy="458" r="30" fill="none" stroke="rgba(255,255,255,0.94)" stroke-width="14"/>
      <circle cx="826" cy="458" r="30" fill="none" stroke="rgba(255,255,255,0.94)" stroke-width="14"/>
      <circle cx="612" cy="250" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M612 280 L586 346 L520 396 M588 346 L650 390 M586 346 L682 346 M522 396 L470 458 M648 390 L732 458" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
  if (text.includes("פולי") || text.includes("pulldown") || text.includes("מתח") || text.includes("pull-up") || text.includes("chin")) {
    return `
      <path d="M394 178 H818" fill="none" stroke="rgba(255,255,255,0.94)" stroke-width="18" stroke-linecap="round"/>
      <path d="M430 178 V508 M782 178 V508" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="16" stroke-linecap="round"/>
      <circle cx="606" cy="286" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 316 L606 412 L554 492 M606 412 L664 492 M606 338 L532 244 M606 338 L680 244" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="520" cy="232" r="14" fill="rgba(255,255,255,0.9)"/>
      <circle cx="692" cy="232" r="14" fill="rgba(255,255,255,0.9)"/>
    `;
  }
  if (text.includes("כתפ") || text.includes("press") || text.includes("arnold") || text.includes("raise")) {
    return `
      <circle cx="606" cy="244" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 274 L606 404 L554 492 M606 404 L664 492 M606 330 L530 258 M606 330 L682 258" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="510" cy="236" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
      <circle cx="702" cy="236" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
    `;
  }
  if (text.includes("curl") || text.includes("בייספס") || text.includes("מרפקים")) {
    return `
      <circle cx="606" cy="250" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 278 L606 406 L548 492 M606 406 L664 492 M606 330 L548 356 L510 320 M606 330 L664 356 L702 320" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="496" cy="312" r="18" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
      <circle cx="716" cy="312" r="18" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
    `;
  }
  if (text.includes("טרייספס") || text.includes("pushdown") || text.includes("מקבילים") || text.includes("dips")) {
    return `
      <path d="M468 220 H744" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="16" stroke-linecap="round"/>
      <path d="M488 220 V520 M724 220 V520" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="16" stroke-linecap="round"/>
      <circle cx="606" cy="286" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 316 L606 414 L552 494 M606 414 L662 494 M606 346 L546 388 L504 452 M606 346 L666 388 L708 452" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
  if (text.includes("מכרע") || text.includes("lunge") || text.includes("split squat") || text.includes("בולגרי")) {
    return `
      <circle cx="606" cy="236" r="28" fill="rgba(255,255,255,0.94)"/>
      <path d="M606 266 L600 372 L520 440 M600 372 L688 418 M520 440 L472 520 M688 418 L756 520 M596 314 L532 346 M596 314 L668 286" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
  if (text.includes("פלאנק") || text.includes("crunch") || text.includes("בטן") || text.includes("leg raise")) {
    return `
      <rect x="394" y="496" width="424" height="18" rx="9" fill="rgba(255,255,255,0.18)"/>
      <circle cx="486" cy="420" r="24" fill="rgba(255,255,255,0.94)"/>
      <path d="M510 430 L612 446 L720 454 M610 446 L574 506 M710 452 L760 506 M486 444 L446 500" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }
  if (text.includes("hip thrust") || text.includes("גלוט") || text.includes("ישבן")) {
    return `
      <rect x="348" y="450" width="156" height="24" rx="12" fill="rgba(255,255,255,0.18)"/>
      <circle cx="548" cy="386" r="24" fill="rgba(255,255,255,0.94)"/>
      <path d="M568 396 L640 414 L718 378 M640 414 L594 504 M718 378 L776 504 M604 416 L540 472 M718 378 H838" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="850" cy="378" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
      <circle cx="882" cy="378" r="24" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="12"/>
    `;
  }
  return `
    <circle cx="606" cy="244" r="28" fill="rgba(255,255,255,0.94)"/>
    <path d="M606 274 L606 402 L548 492 M606 402 L664 492 M606 330 L536 358 M606 330 L676 358" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M474 520 H738" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="18" stroke-linecap="round"/>
  `;
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

function shiftIsoDate(iso, deltaDays) {
  const date = new Date(`${iso}T00:00:00`);
  date.setDate(date.getDate() + deltaDays);
  return formatIsoDate(date);
}

function getWeekStart(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());
  return start;
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

function formatWeekLabel(startDate) {
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  const sameMonth = startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear();
  if (sameMonth) {
    return `${startDate.getDate()}-${endDate.getDate()} ${new Intl.DateTimeFormat("he-IL", {
      month: "long",
      year: "numeric",
    }).format(startDate)}`;
  }
  return `${formatShortDayMonth(startDate)} - ${formatShortDayMonth(endDate)}`;
}

function formatShortDayMonth(date) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "short",
  }).format(date);
}

function formatWeekdayShort(date) {
  return new Intl.DateTimeFormat("he-IL", {
    weekday: "short",
  }).format(date);
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(isoDate));
}

function getAgeFromBirthDate(isoDate) {
  if (!isoDate) return "";
  const birthDate = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(birthDate.getTime())) return "";
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
  if (!hasHadBirthday) age -= 1;
  return age >= 0 ? String(age) : "";
}

function formatProfileSubtitle(profile) {
  const parts = [];
  if (profile.weight) parts.push(`${profile.weight} ק"ג`);
  if (profile.height) parts.push(`${profile.height} ס"מ`);
  const age = getAgeFromBirthDate(profile.birthDate);
  if (age) parts.push(`גיל ${age}`);
  if (!parts.length) return "לחץ כדי לערוך משקל, גובה, גיל ויעדים.";
  return parts.join(" · ");
}

function renderProfileChips() {
  elements.profileChips.innerHTML = "";
  [
    `משקל: ${state.profile.weight || "-"}`,
    `גובה: ${state.profile.height || "-"}`,
    `גיל: ${getAgeFromBirthDate(state.profile.birthDate) || "-"}`,
    `יעד קלוריות: ${state.profile.dailyCaloriesTarget || "-"}`,
    `יעד חלבון: ${state.profile.dailyProteinTarget || "-"}`,
  ].forEach((text) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = text;
    elements.profileChips.appendChild(chip);
  });
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

function escapeAttribute(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function encodeXml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
