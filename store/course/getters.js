import { getField } from "vuex-map-fields";
export default {
  getCourse: (state) => state.course,
  getPurchase: (state) => state.purchase,
  getChapter: (state) => (id) => {
    return state.course.chapters.find((chapter) => chapter.id === id);
  },
  getField,
};
