<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
      <div
        v-if="$fetchState.pending"
        class="transition lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div v-else>
        <div v-if="!error">
          <div class="max-w-lg mx-auto">
            <h1 class="text-2xl font-bold text-center text-red-600 sm:text-3xl">
              {{ $t("forgot_password") }}
            </h1>
            <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
              {{ $t("please_set_new_password") }}
            </p>
            <ValidationObserver
              v-show="!submitting && !submitted"
              ref="reset_password_form"
              v-slot="{ handleSubmit }"
            >
              <form
                class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
                @submit.prevent="handleSubmit(handleForm)"
              >
                <BasicInput
                  id="password_new"
                  v-model="password"
                  name="password"
                  label="password"
                  rules="required|min:8"
                  type="password"
                  :auto-complete="false"
                />
                <BasicInput
                  id="confirmation_reset"
                  v-model="confirmation"
                  name="confirmation"
                  label="confirmation"
                  rules="required|confirmed:password_new"
                  type="password"
                  :auto-complete="false"
                />

                <button type="submit" class="block w-full px-5 py-3">
                  <ShadowButton text="reset" color="bg-green-600" />
                </button>

                <TosRemind />
                <div class="mt-12 mx-auto text-center h-8">
                  <p class="text-xs text-gray-500">
                    {{ $t("have_account") }}
                    <label
                      for="login-modal"
                      class="capitalize text-blue-600 cursor-pointer"
                      >{{ $t("login_now") }}</label
                    >
                  </p>
                </div>
              </form>
            </ValidationObserver>
            <div
              v-if="submitting && !submitted"
              class="transition rounded-lg p-8 flex flex-col mx-auto w-full"
            >
              <GeneralLoading text="loading" />
            </div>
            <div v-if="submitted" class="flex flex-col mx-auto py-24">
              <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
                {{ $t("password_reset_done") }}
              </h1>
              <div class="py-6 mx-auto">
                <label for="login-modal">
                  <ShadowButton text="login" color="bg-red-600" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div v-if="error">
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
              {{ $t("verification_error") }}
            </h1>
            <Confused
              width="120"
              class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />
            <h1 class="text-2xl font-medium title-font mb-2 text-red-600">
              {{ errorMsg }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Confused from "../components/commons/confused";
import ShadowButton from "../components/buttons/shadow-button";
import { ValidationObserver } from "vee-validate";
import BasicInput from "../components/inputs/basic-input";
import TosRemind from "../components/commons/tos-remind";
import GeneralContentLoading from "../components/loadings/general-content-loading";
import ContentsLoader from "../components/loadings/contents-loader";
import GeneralLoading from "../components/loadings/general-loading";

export default {
  components: {
    GeneralLoading,
    ContentsLoader,
    GeneralContentLoading,
    TosRemind,
    BasicInput,
    ValidationObserver,
    ShadowButton,
    Confused,
  },
  data() {
    return {
      email: "",
      token: "",
      password: "",
      confirmation: "",
      error: false,
      errorMsg: "",
      done: false,
      submitting: false,
      submitted: false,
    };
  },
  async fetch() {
    this.token = this.$route.query.token;
    if (!this.token) {
      // Error no token provided
      await this.$router.push("/");
    }
    try {
      const result = await this.$axios.$get(
        "/v1/user-auth/reset-token/" + this.token
      );
      this.email = result.email;
    } catch (err) {
      this.error = true;
      this.errorMsg = err.response.data.message;
      this.$toast.error(err.response.data.message, {
        duration: 5000,
      });
    }
  },
  fetchOnServer: false,
  fetchDelay: 500,
  methods: {
    async handleForm() {
      this.submitting = true;
      try {
        const result = await this.$axios.$post("/v1/user-auth/reset-password", {
          email: this.email,
          token: this.token,
          password: this.password,
          confirmation: this.confirmation,
        });
        this.submitting = false;
        this.submitted = true;
        await this.$router.push(this.localePath("/"));
      } catch (e) {
        this.submitting = false;
        this.$toast.error(e.response.data.message, {
          duration: 3000,
        });
        this.$refs.reset_password_form.setErrors({
          password_new: e.response.data.message,
        });
      }
    },
  },
};
</script>
