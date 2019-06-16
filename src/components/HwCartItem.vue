<template>
  <div class="hw-cart-item">
    <label class="hw-cart-item-check">
      <input type="checkbox" :checked="isCheck" @change="toggleIsCheck(id)">
      <span></span>
    </label>
    <div class="hw-cart-item-img">
      <img :src="image" :alt="title">
    </div>
    <div class="hw-cart-item-info">
      <p class="hw-cart-item-title"><span>{{title}}</span><b @click="delBtn(id)">删除</b></p>
      <p class="hw-cart-item-action">
        <span class="hw-cart-item-price">￥{{price | toFix2}}</span>
        <span class="hw-cart-item-counter">
          <span @click="countDecrement(id)">-</span>
          <input type="Number" :value="count"  @blur="ChangeBlur" ref="input" @keyup="countIuputChange(id)">
          <span @click="countIncrement(id)">+</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
// import { constants, createHmac } from 'crypto'
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 1
    },
    isCheck: {
      type: Boolean,
      deflate: true
    },
    title: {
      type: String,
      deflate: true
    }
  },
  methods: {
    ...mapMutations([
      'toggleIsCheck',
      'countDecrement',
      'countIncrement',
      'countChange',
      'delBtn'
    ]),
    countIuputChange (id) {
      let val = this.$refs.input.value
      val = Number(val.replace(/^0|[^\d]/g, ''))
      if (val) this.countChange({ id, val })
    },
    ChangeBlur () {
      let val = this.$refs.input.value
      if (val < 1 || val.startsWith(0)) this.$refs.input.value = this.count
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
$grey: #eee;
$deepGrey: #383838;
$mainColor: #26a2ff;
.hw-cart-item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid $grey;

  &-check {
    width: 20px;
    height: 20px;
    margin: 10px 10px 0 0;
    input {
      display: none;
      &:checked {
        + span {
          background-color: $mainColor;
          border-color: $mainColor;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            width: 13px;
            height: 7px;
            border: 2px solid #ffffff;
            border-width: 0 0px 2px 2px;
            left: 0;
            top: 0;
            transform: rotate(-45deg)
          }
        }
      }
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: 2px solid $deepGrey;
    }
  }

  &-img {
    width: 100px;
    height: 80px;

    img {
      width: 100%;
    }
  }

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
  }

  &-title {
    width: 220px;
    font-size: 12px;
    line-height: 20px;

    span {
      width: 180px;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    b {
      // position: absolute;
      float: right;
      right: -12px;
      line-height: 20px;
      padding: 0 6px;
      border-radius: 10px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color:$mainColor;
    }
  }

  &-action {
    display: flex;
    justify-content: space-between;
  }

  &-price {
    color:#c00;
  }

  &-counter {
    height: 20px;
    line-height: 20px;
    border: 1px solid $deepGrey;
    border-radius: 3px;
    display: flex;

    span {
      display: inline-block;
      width: 20px;
      text-align: center;
      float: left;
    }

    input {
      width: 24px;
      padding: 2px;
      border: 1px solid $deepGrey;
      border-width: 0 1px;
      outline: none;
      text-align: center;
    }
  }
}
</style>
