<template>
  <div class="flex flex-col min-h-screen overflow-hidden scroll-smooth hover:scroll-auto bg-gray-100">
    <section class="relative max-w-6xl mx-auto px-4 sm:px-6 m-20 bg-white p-6 shadow-lg	rounded-md" id="navigation">

      <div class="m-5">
        Proxy Contract Address:
        <el-input placeholder="0x.." v-model="proxyContractAddress"/>
      </div>

      <div class="m-5">
        Logic Contract Address:
        <el-input placeholder="0x.." v-model="logicContractAddress"/>
      </div>

      <div class="m-5">
        <el-button type="primary" @click="handleClick">
          Submit
        </el-button>
      </div>

    </section>

    <section class="relative max-w-6xl mx-auto px-4 sm:px-6 m-20 bg-white p-6 shadow-lg	rounded-md" id="home">

      <div>
        <el-button type="primary" @click="read">Read as proxy</el-button>
        <el-button type="primary" @click="white">Write as proxy</el-button>
      </div>

      <div class="m-5" v-if="type==='read'">
        <div v-for="item in read_functions" :key="item.name">


          <el-card class="box-card m-2">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <el-input/>
            <el-button type="info" >Query</el-button>

            <!--            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>-->
          </el-card>


          <!--          <span class="font-bold">{{ item.name }}</span>-->
          <!--          <el-input />-->
        </div>
      </div>

      <div class="m-5" v-if="type==='white'">
        <div v-for="item in write_functions" :key="item.name">
          <span class="font-bold">{{ item.name }}</span>
          <el-input/>
        </div>
      </div>

    </section>
  </div>
</template>


<script>
import {ref} from 'vue'
// import {ElNotification} from 'element-plus'
// import axios from "axios";

const proxyContractAddress = ref('TJzar3ayukrPcHDY7py7VYmkoeKvJ7sfwC');
const logicContractAddress = ref('TRPqQYtqtvW8XNuxctLxGgSDTuSUDX3GeJ');

const read_functions = ref([]);
const write_functions = ref([]);

const type = ref('read');

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {},
  setup() {
    return {
      type: type,
      read_functions,
      write_functions,
      proxyContractAddress: proxyContractAddress,
      logicContractAddress: logicContractAddress,
      read: async () => {
        type.value = 'read';
      },
      white: async () => {
        type.value = 'write';
      },
      handleClick: async () => {

        let logic_contract = await window.tronWeb.contract().at(logicContractAddress.value);
        let proxy_contract = await window.tronWeb.contract().at(proxyContractAddress.value);

        // console.log('click', logicContractAddress, proxyContractAddress);
        console.log('logic', logic_contract);
        console.log('proxy', proxy_contract);

        const logic_abi = logic_contract.abi;

        for (let i = 0; i < logic_abi.length; i++) {
          if (logic_abi[i].type === 'function') {
            if (logic_abi[i].stateMutability === 'view' || logic_abi[i].stateMutability === 'pure') {
              read_functions.value.push(logic_abi[i]);
            } else {
              write_functions.value.push(logic_abi[i]);
            }
          }
        }

        console.log(write_functions.value);
      }
    }
  }
}
</script>
