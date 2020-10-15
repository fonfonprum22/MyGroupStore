<template>
  <div class="form">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card>
        <v-card-title> Form </v-card-title>
        <v-card-subtitle> Input Data Information </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                :rules="[(v) => !!v || 'Code is required']"
                label="Code :"
                v-model="form.Code"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :rules="[(v) => !!v || 'Name is required']"
                label="Name"
                v-model="form.name"
                required
              />
            </v-col>
            <v-col>
              <v-text-field
                :rules="[(v) => !!v || 'LastName is required']"
                label="LastName"
                v-model="form.lastName"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :rules="[(v) => !!v || 'Email is required']"
                label="Email"
                v-model="form.Email"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :rules="[(v) => !!v || 'Phone is required']"
                label="Phone :"
                v-model="form.Phone"
                required
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!valid" @click="submit()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-10"
    ></v-data-table>
  </div>
</template>

<script>
import admin from "firebase-admin";
import db from "firebase";
export default {
  name: "HelloWorld",
  data: () => ({
    valid: false,
    employee: [],
    form: {},
    date: "none",
    headers: [
      {
        text: "Code",
        value: "Code",
      },
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        value: "lastName",
        text: "LastName",
      },
      {
        text: "Email",
        value: "Email",
      },
      {
        text: "Phone",
        value: "Phone",
      },
    ],
    desserts: [],
    db:'',
    docRef:'',
  }),
  methods: {
    submit() {
      this.employee.push(this.form);
      // this.form = {};
      // this.$store.commit("addStudent", this.employee);
      this.db = admin.firestore();
      this.docRef = this.db.collection("users").doc("alovelace");
      docRef.set(this.form)

    },
  },
  updated() {
    this.desserts = this.$store.state.student;
  },
};
</script>
<style >
.form {
  background-color: rgb(152, 224, 226);
  justify-content: center;
  padding: 150px;
}
</style>
