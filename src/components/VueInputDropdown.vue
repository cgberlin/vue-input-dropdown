
<template>
  <div v-on-clickaway="closePicker" :class="[outerContainerClass]" :style="outerContainerStyle">
    <input :style="[{height:options['height'],width:options['width']},options['inputStyle']]"
           :class="[inputClass]"
           :autocomplete="options['autocomplete']"
           @blur="inputBlurCheck"
           @click="inputClicked"
           v-model="selectedItem" 
           :placeholder="options['placeholder']||'Select'"
          />
    <transition :name="transitionName">
      <div v-if="isOpen" 
           :style="[{top:y,left:x,width:options['width'], 'margin-top':options['height']},options['dropdownStyle']]" 
           :class="[dropdownClass]"
          >
        <div v-for="(item, index) in itemList" 
             :key="index" 
             :style="options['itemContainerStyle']"
             :class="[itemContainerClass]" 
             @click="itemPicked(item)"
            >
          <!-- necessary to do v-if for dynamic active class and styles -->
          <p v-if="isSelected(item)" 
             :class="[activeItemClass]"
             :style="options['activeItemStyle']"
            >
              {{item}}
          </p>
          <p v-else 
             :class="[nonActiveItemClass]"
             :style="options['nonActiveItemStyle']"  
            >
              {{item}}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'
  export default {
    name: "VueInputDropdown",
    mixins: [clickaway],
    props: ['options', 'items', 'picked', 'selected'],
    created() {
      let { selected, items } = this
      this.selectedItem = selected
      this.itemList = items
    },
    data() {
      return {
        isOpen: false,
        x: 0,
        y: 0,
        selectedItem: "",
        itemList: []
      }
    },
    watch: {
        'items': {
          handler: function(to, from) {
            this.itemList = to
          },
          deep: true
        },
        'selectedItem': {
          handler: function(to, from) {
            let { items } = this
            if (to) this.itemList = items.filter(item => { return ~item.toLowerCase().indexOf(to.toLowerCase())})
          }
        }
    },
    computed: {
      outerContainerStyle() {
        let { options } = this
        if (options && options['outerContainerStyle']) return options['outerContainerStyle']
        else return ''
      },
      outerContainerClass() {
        let { options } = this
        if (options && options['outerContainerClass']) return options['outerContainerClass']
        else return 'dropdown-container'
      },
      inputClass() {
        let { options } = this
        if (options && options['inputClass']) return options['inputClass']
        else return 'input-box'
      },
      dropdownClass() {
        let { options } = this
        if (options && options['dropdownClass']) return options['dropdownClass']
        else return 'dropdown-inner'
      },
      itemContainerClass() {
        let { options } = this
        if (options && options['itemContainerClass']) return options['itemContainerClass']
        else return 'item'
      },
      activeClass() {
        let { options } = this
        if (options && options['activeClass']) return options['activeClass']
        else return 'active'
      },
      activeItemClass() {
        let { options } = this
        if (options && options['activeItemClass']) return options['activeItemClass']
        else return 'active'
      },
      nonActiveItemClass() {
        let { options } = this
        if (options && options['nonActiveItemClass']) return options['nonActiveItemClass']
        else return 'non-active'
      },
      transitionName() {
        let { options } = this
        if (options && options['transitionName']) return options['transitionName']
        else return 'slide-fade'
      }
    },
    methods: {
      inputClicked(e) {
        let { isOpen, items } = this
        if (!isOpen) {
          this.isOpen = true
          let { x, y } = this.getPos(e.target)
          this.x = x.toString() + 'px'
          this.y = y.toString() + 'px'
          this.itemList = items
        }
      },
      itemPicked(item) {
        this.isOpen = false
        this.selectedItem = item
        this.picked(item)
      },
      closePicker() {
        this.isOpen = false
      },
      isSelected(item) {
        let { selectedItem } = this
        if (item === selectedItem) return true
        else return false
      },
      inputBlurCheck() {
        let { itemList, selectedItem, options, items } = this
        let len = items.length
        if (selectedItem === "") {
          this.picked("")
          this.itemList = items
          return  
        }
        if (len <= 0 || options['forceSelect']) return
        if (selectedItem) itemList = items.filter(item => { return ~item.toLowerCase().indexOf(selectedItem.toLowerCase())})
        if (itemList.length <= 0) this.selectedItem = ""
        else {
          this.itemList = items
          this.selectedItem = itemList[0]
          this.picked(itemList[0])
        }
      },
      getPos(el) {
        let rect = el.getBoundingClientRect()
        return { x: rect.left, y: rect.top }
      },
    }
  }
</script>

<style scoped>
.dropdown-container, 
.input-box, 
.item, 
.active, 
.non-active {
  width: 100%;
  height: 100%;
}
.dropdown-container, 
.dropdown-inner {
  display: flex;
  flex-direction: column;
}
.dropdown-inner {
  width: 2rem;
  height: auto;
  position: absolute;
  z-index: 999999;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.25);
  background-color:white;
}
.input-box {
  padding-left: 1rem;
  padding-right: 1rem;
}
.item {
  height: auto;
}
.item:hover {
  cursor:pointer;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.15);
}
.active, 
.non-active {
  padding: 1rem;
}
.active {
  background-color: lightgray;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>