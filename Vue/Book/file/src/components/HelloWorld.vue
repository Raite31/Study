<template>
  <div class="hello">
    <div class="contain">
      <h1>{{ msg }}</h1>
      <li v-for="n in evenNumbers" :key="n.index">{{ n }}</li>
      <li v-for="i in items" :key="i.index">{{ i }}</li>
      <ul v-for="set in sets" :key="set.index">
        <li v-for="n in even(set)" :key="n.index">{{ n }}</li>
      </ul>
    </div>

    <div class="contain">
      <template v-for="item in items">
        <li>{{ item.message }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </div>

    <div class="contain">
      <button v-on:click="warn('Form cannot be submitted yet.', $eve)">
        Submit
      </button>
    </div>

    <div class="contain">
      <div>
        <span>Multiline message is: </span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br />
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
      </div>

      <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
      </div>

      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
        <br />
        <span>Checked names: {{ checkedNames }}</span>
      </div>

      <div>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <br />
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <br />
        <span>Picked: {{ picked }}</span>
      </div>

      <div>
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option value="s">A</option>
          <option value="sss">B</option>
          <option value="C">C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "",
      picked: "",
      checkedNames: [],
      checked: "",
      msg: "Welcome to Your Vue.js App",
      message: "",
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
ul,
li {
  list-style: none;
}
.contain {
  margin: 20px auto;
}
</style>
