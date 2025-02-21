import Vue from "vue";
import {
  required,
  email,
  min,
  confirmed,
  alpha,
  alpha_dash,
  alpha_spaces,
  max,
  digits,
  mimes,
  size,
} from "vee-validate/dist/rules";
import { ValidationProvider, extend } from "vee-validate";

extend("required", required);
extend("email", email);
extend("min", min);
extend("max", max);
extend("confirmed", confirmed);
extend("alpha", alpha);
extend("alpha_dash", alpha_dash);
extend("alpha_spaces", alpha_spaces);
extend("digits", digits);
extend("size", size);
extend("mimes", mimes);
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
