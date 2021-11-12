<template>
    <button class="fei-button" :class="classObj">
        <fei-icon :icon-name="icon" v-if="icon" :class="[iconPosition]"></fei-icon>
       <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'FeiButton',
        props: {
            type: {
                default:'normal',
                validator(value){
                 return ['normal','primary','text'].indexOf(value)!==-1
                }
            },
            size: {
                default:'default',
                validator(value){
                 return ['default','medium','small','mini'].indexOf(value)!==-1
                }
            },
            iconPosition: {
                default:'left',
                validator(value){
                 return ['left','right'].indexOf(value)!==-1
                }
            },
            icon:String,
        },
        data(){
            return{
                classObj:{
                    ['fei-button-'+this.size]:true,
                     ['fei-button-'+this.type]:true,
                },
            }
        },
    }

</script>

<style lang="scss">
    @import "../../../style/base";

    .fei-button {
        box-sizing: border-box;
        border-style: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
   /*type*/
    .is_circle{
        border-radius: 50%;
        padding: 12px;
    }
    .is_round{
        border-radius: 20px;
    }
    /*primary button*/
    .fei-button-primary {
        background-color: $color-primary;
        border-color: $color-primary;
        color: $color-white;
        &:hover {
            background-color: $color-primary-light-50;
            border-color: $color-primary-light-50;
        }

        &:active {
            background-color: $color-primary-click;
            border-color: $color-primary-click;
        }
        &:disabled {
            background-color: $color-primary-disable;
            border-color: $color-primary-disable;
            color: $color-black-light-20;
            cursor:not-allowed;
            &:hover{
                background-color: $color-primary-disable;
                border-color: $color-primary-disable;
                color: $color-black-light-20;
            }
        }
    }

    /*normal button*/
    .fei-button-normal {
        background-color: $color-normal;
        border: 1px solid $color-black-light-15 ;
        color: $color-black-light-65;
        &:hover {
            color: $color-primary-light-8;
            border-color: $color-primary-light-8;
        }

        &:active {
            color: $color-primary-click;
            border-color: $color-primary-click;
        }
        &:disabled {
            background-color: $color-primary-disable;
            border-color: $color-primary-disable;
            color: $color-black-light-20;
            cursor:not-allowed;
            &:hover{
                background-color: $color-primary-disable;
                border-color: $color-primary-disable;
                color: $color-black-light-20;
            }
        }
    }

    /*text button*/
    .fei-button-text{
        background-color: white;
        border: none;
        color: $color-primary;
        &:hover {
              color: $color-primary-light-8;
        }

        &:active {
            color: $color-primary-click;
        }
        &:disabled {
             cursor:not-allowed;
            color: $color-black-light-20;
            &:hover{
                color: $color-black-light-20;
            }
        }
    }


    /* 大小样式 */
    .fei-button-default{
        padding: 12px 20px;
        font-size: $font-size-normal;
    }
    .fei-button-medium {
        padding: 10px 20px;
        font-size: $font-size-normal;
    }

    .fei-button-small {
        padding: 9px 15px;
        font-size: $font-size-normal - 2;
    }

    .fei-button-mini {
        padding: 5px 16px;
        font-size: $font-size-normal - 2;
    }

    /*icon position*/
    .left{
        order: 1;
         margin-right: 5px;
        ~ span{
            order: 2;
        }
    }
    .right{
        order: 2;
        margin-left: 5px;
    }
</style>
