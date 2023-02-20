<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li v-for="n in evenNumbers" :key="n.index">{{ n }}</li>
    <li v-for="i in items" :key="i.index">{{ i }}</li>
    <ul v-for="set in sets" :key="set.index">
      <li v-for="n in even(set)" :key="n.index">{{ n }}</li>
    </ul>

    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>

    <button v-on:click="warn('Form cannot be submitted yet.', $eve)">
      Submit
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
      ],
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  methods: {
    push() {
      this.items.push({ message: "Baz" });
    },
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    warn: function(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    }
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  mounted() {
    this.push();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
