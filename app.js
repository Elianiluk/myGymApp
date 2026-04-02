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

const elements = {
  planName: document.querySelector("#planName"),
  profilePreview: document.querySelector("#profilePreview"),
  profileBody: document.querySelector("#profileBody"),
  profileSubtitle: document.querySelector("#profileSubtitle"),
  profileChips: document.querySelector("#profileChips"),
  profileWeight: document.querySelector("#profileWeight"),
  profileHeight: document.querySelector("#profileHeight"),
  profileBirthDate: document.querySelector("#profileBirthDate"),
  profileAge: document.querySelector("#profileAge"),
  profileDailyCaloriesTarget: document.querySelector("#profileDailyCaloriesTarget"),
  profileDailyProteinTarget: document.querySelector("#profileDailyProteinTarget"),
  saveProfileBtn: document.querySelector("#saveProfileBtn"),
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
  renderTabs();
  renderLibrary();
  renderHero();
  renderWorkoutWeek();
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
      <strong>${escapeHtml(exercise.name)}</strong>
      <small>${escapeHtml(exercise.englishName || "")}</small>
      <small>${escapeHtml(exercise.group)} · ${escapeHtml(exercise.equipment)} · ${escapeHtml(exercise.difficulty)}</small>
    `;
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
