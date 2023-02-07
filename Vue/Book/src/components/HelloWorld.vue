<template>
  <div class="hello">
    <!-- computed======================================== -->
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>

    <!-- watch=============================================== -->
    <div id="demo">
      <input type="text" v-model="firstName" />
      <input type="text" v-model="lastName" />
      {{ fullName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "Hello",

      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    // fullName: function() {
    //   return this.firstName + " " + this.lastName;
    // }

    // computed加上setter
    fullName: {
      // getter
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function() {
        console.log("newValue: ", newValue);
        var names = newValue.split("");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
      console.log(this.fullName);
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
      console.log(this.fullName);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
