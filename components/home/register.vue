<template>
  <v-layout row wrap class="animated pulse">
    <v-flex xs10 offset-xs1>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <v-text-field label="Email"></v-text-field>
      </v-flex>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <v-text-field
          v-model="password"
          :append-icon="show4 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show4 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          @click:append="show4 = !show4"
        ></v-text-field>
      </v-flex>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <v-text-field
          v-model="password2"
          :append-icon="show4 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show4 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          @click:append="show4 = !show4"
        ></v-text-field>
      </v-flex>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <v-layout row nowrap justify-space-between align-center>
          <a @click="notRegistered">Do you already have an account? Log in !</a>
          <v-btn color="info">Register</v-btn>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    show4: false,
    valid: true,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match"
    },
    email: '',
    password: '',
    password2: ''
  }),
  methods: {
    notRegistered() {
      this.$emit('notRegistered', true)
    }
  }
}
</script>

<style>
</style>
