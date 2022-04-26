<template>
  <div class="flex flex-col space-y-4 min-h-screen overflow-hidden scroll-smooth hover:scroll-auto bg-gray-100 p-5">
    <section class=" mx-5 bg-white p-6 shadow-lg	rounded-md flex flex-col " id="navigation">

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

    <section class="mx-5 bg-white p-6 shadow-lg	rounded-md flex flex-col " id="home">

      <div v-if="type==='read'">
        <el-button type="primary" @click="select_read">Read as proxy</el-button>
        <el-button type="info" @click="select_white">Write as proxy</el-button>
      </div>

      <div v-if="type==='write'">
        <el-button type="info" @click="select_read">Read as proxy</el-button>
        <el-button type="primary" @click="select_white">Write as proxy</el-button>
      </div>


      <div class="m-5 flex flex-col" v-if="type==='read'">
        <div v-for="(item) in read_functions" :key="item.name">
          <el-card class="box-card m-2">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <el-form :model="forms[item.name]" label-width="120px">
              <div class="m-2" v-for="input in item.inputs" :key="input.name">
                <el-input :placeholder="input.name + '(' + input.type + ')'" class=""/>
              </div>
              <el-button class="mt-3" type="info" @click="query($event,item.name)">Query</el-button>
              <div class="m-2">{{ forms[item.name].result }}</div>
            </el-form>
          </el-card>
        </div>
      </div>


      <div class="m-5" v-if="type==='write'">
        <div v-for="item in write_functions" :key="item.name">
          <el-card class="box-card m-2">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <div class="w-8/12		">
              <div class="m-2" v-for="input in item.inputs" :key="input.name">
                <el-input :placeholder="input.name + '(' + input.type + ')'" class=""/>
              </div>
              <el-button class="mt-3" type="primary" @click="write">Write</el-button>
            </div>
          </el-card>
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

const read_functions = ref({});
const write_functions = ref({});

const type = ref('read');
const forms = ref({});

let logic_contract;
let proxy_contract;

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {},
  setup() {
    return {
      type: type,
      forms: forms,
      read_functions: read_functions,
      write_functions: write_functions,
      proxyContractAddress: proxyContractAddress,
      logicContractAddress: logicContractAddress,
      select_read: async () => {
        type.value = 'read';
      },
      select_white: async () => {
        type.value = 'write';
      },
      query: async (e, name) => {
        // console.log('read', e, name);
        const function_abi = read_functions.value[name];
        console.log(function_abi);
        const result = await proxy_contract[name]().call(
            {}
        );
        console.log(result);
        forms.value[name].result = result;
      },
      write: async (e, name) => {
        console.log('write', e, name);
      },
      handleClick: async () => {

        logic_contract = await window.tronWeb.contract().at(logicContractAddress.value);
        // proxy_contract = await window.tronWeb.contract().at(proxyContractAddress.value);
        proxy_contract = await window.tronWeb.contract(
            logic_contract.abi,
            proxyContractAddress.value);

        // console.log('click', logicContractAddress, proxyContractAddress);
        console.log('logic', logic_contract);
        console.log('proxy', proxy_contract);

        const logic_abi = logic_contract.abi;

        for (let i = 0; i < logic_abi.length; i++) {
          if (logic_abi[i].type === 'function') {
            if (logic_abi[i].stateMutability === 'view' || logic_abi[i].stateMutability === 'pure') {
              read_functions.value[logic_abi[i].name] = (logic_abi[i]);
            } else {
              write_functions.value[logic_abi[i].name] = (logic_abi[i]);
            }

            forms.value[logic_abi[i].name] = {
              result: '',
            };
          }
        }

        console.log(logic_contract);
      }
    }
  }
}
</script>

<style type="text/css">

.box-card {
  /*display: flex;*/
  /*flex: 1 1 auto;*/
  /*margin-left: 0;*/
  /*margin-right: 0;*/
  /*width: auto;*/

}
</style>
