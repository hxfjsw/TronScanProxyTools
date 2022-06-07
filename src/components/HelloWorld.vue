<template>
  <div class="flex flex-col space-y-4 min-h-screen overflow-hidden scroll-smooth hover:scroll-auto bg-gray-100 p-5">
    <section class=" mx-5 bg-white p-6 shadow-lg	rounded-md flex flex-col " id="navigation">

      <div class="m-5">
        Proxy Contract Address:
        <div class="flex space-w-4">
          <el-input placeholder="0x.." v-model="proxyContractAddress"/>
          <a target="_blank" :href="getTronscanHost()+proxyContractAddress">
            <svg class="link-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="
              M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666
              42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667
              42.666667 0 0 1-42.666667-42.666667V256a42.666667
              42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667
              0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128
              0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667
              42.666667 0 0 0-42.666667-42.666667z
            " fill="currentColor">
              </path>
              <path d="
              M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667
              42.666667 0 0 0 0 60.586667 42.666667 42.666667
              0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667
              42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0
              42.666667-42.666667V170.666667a42.666667 42.666667 0 0
              0-42.666667-42.666667h-170.666666a42.666667
              42.666667 0 0 0 0 85.333333z
            " fill="currentColor">
              </path>
            </svg>
          </a>
        </div>
      </div>

      <div class="m-5 ">
        Logic Contract Address:
        <div class="flex space-w-4">
          <el-input placeholder="0x.." v-model="logicContractAddress" disabled/>
          <a target="_blank" :href="getTronscanHost()+logicContractAddress">
            <svg class="link-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="
              M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666
              42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667
              42.666667 0 0 1-42.666667-42.666667V256a42.666667
              42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667
              0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128
              0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667
              42.666667 0 0 0-42.666667-42.666667z
            " fill="currentColor">
              </path>
              <path d="
              M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667
              42.666667 0 0 0 0 60.586667 42.666667 42.666667
              0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667
              42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0
              42.666667-42.666667V170.666667a42.666667 42.666667 0 0
              0-42.666667-42.666667h-170.666666a42.666667
              42.666667 0 0 0 0 85.333333z
            " fill="currentColor">
              </path>
            </svg>
          </a>
        </div>

      </div>

      <div class="m-5">
        Admin Contract Address:
        <div class="flex space-w-4">
          <el-input placeholder="0x.." v-model="adminContractAddress" disabled/>
          <a target="_blank" :href="getTronscanHost()+adminContractAddress">
            <svg class="link-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="
              M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666
              42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667
              42.666667 0 0 1-42.666667-42.666667V256a42.666667
              42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667
              0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128
              0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667
              42.666667 0 0 0-42.666667-42.666667z
            " fill="currentColor">
              </path>
              <path d="
              M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667
              42.666667 0 0 0 0 60.586667 42.666667 42.666667
              0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667
              42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0
              42.666667-42.666667V170.666667a42.666667 42.666667 0 0
              0-42.666667-42.666667h-170.666666a42.666667
              42.666667 0 0 0 0 85.333333z
            " fill="currentColor">
              </path>
            </svg>
          </a>
        </div>
      </div>

      <div class="m-5">
        <el-button type="primary" class="bg-blue-400" @click="handleClick">
          Submit
        </el-button>
        <!--        <button  @click="handleClick" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>-->

      </div>

    </section>

    <section class="mx-5 bg-white p-6 shadow-lg	rounded-md flex flex-col " id="home">

      <div v-if="type==='read'">
        <el-button type="primary" class="bg-blue-400" @click="select_read">Read as proxy</el-button>
        <el-button type="info" class="bg-gray-400" @click="select_white">Write as proxy</el-button>
      </div>

      <div v-if="type==='write'">
        <el-button type="info" class="bg-gray-400" @click="select_read">Read as proxy</el-button>
        <el-button type="primary" class="bg-blue-400" @click="select_white">Write as proxy</el-button>
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
                <el-input :placeholder="input.name + '(' + input.type + ')'" class=""
                          v-model="forms[item.name][input.name]"/>
              </div>
              <el-button class="bg-gray-400 mt-3" type="info" @click="query($event,item.name)">Query</el-button>
              <div class="m-2">{{ forms[item.name].result }}</div>
            </el-form>
          </el-card>
        </div>
      </div>


      <div class="m-5 flex flex-col" v-if="type==='write'">
        <div v-for="(item) in write_functions" :key="item.name">
          <el-card class="box-card m-2">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
              </div>
            </template>
            <el-form :model="forms[item.name]" label-width="120px">
              <div class="m-2" v-for="input in item.inputs" :key="input.name">
                <el-input :placeholder="input.name + '(' + input.type + ')'" class=""
                          v-model="forms[item.name][input.name]"/>
              </div>
              <el-button class="bg-blue-400 mt-3" type="primary" @click="write($event,item.name)">Query</el-button>
              <div class="m-2">{{ forms[item.name].result }}</div>
            </el-form>
          </el-card>
        </div>
      </div>

    </section>

  </div>

</template>


<script>
import {ref} from 'vue'
import {ElNotification} from 'element-plus'
// import axios from "axios";
import {ethers, utils} from "ethers"

const proxyContractAddress = ref('TJzar3ayukrPcHDY7py7VYmkoeKvJ7sfwC');
const logicContractAddress = ref('');
const adminContractAddress = ref('');

const read_functions = ref({});
const write_functions = ref({});

const type = ref('read');
const forms = ref({});

let logic_contract;
let proxy_contract;
// let admin_contract;

//proxyContractAddress, slot
let getSlot = async function (proxyContractAddress) {

  let host = window.tronWeb.fullNode.host;
  let url = host + '/jsonrpc';

  let bsc_rpc_url = url
  const provider = new ethers.providers.JsonRpcProvider(bsc_rpc_url)

  const proxy_address = window.tronWeb.address.toHex(proxyContractAddress).substring(2);
  console.log("proxy_address:",proxy_address)
  const admin_slot = ethers.BigNumber.from("0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103")
  const impl_slot = ethers.BigNumber.from("0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc")


  const admin_info = await provider.getStorageAt(proxy_address , admin_slot)
  console.log("admin_info:",admin_info)
  let admin_address = utils.getAddress("0x" + admin_info.substring(26))
  console.log("admin_address:",admin_address)
  admin_address =  window.tronWeb.address.fromHex(admin_address);
  console.log("admin_address:",admin_address)

  const impl_info = await provider.getStorageAt(proxy_address , impl_slot)
  console.log("impl_info:",impl_info)
  let impl_address = utils.getAddress("0x" + impl_info.substring(26))
  impl_address =  window.tronWeb.address.fromHex(impl_address);

  console.log("impl_address:",impl_address)

  return [admin_address,impl_address]
}

// let getFirstEvent = async function (proxyContractAddress) {
//   let host = window.tronWeb.fullNode.host;
//   let url = host + '/v1/contracts/' + proxyContractAddress + '/transactions?order_by=block_timestamp,asc&limit=1';
//   let response = await axios.get(url);
//   let context = response.data;
//   let txid = context.data[0].txID;
//   let events = await window.tronWeb.getEventByTransactionID(txid);
//   let newAdmin = events[0].result.newAdmin;
//   newAdmin = window.tronWeb.address.fromHex(newAdmin);
//
//   // console.log(newAdmin)
//   admin_contract = await window.tronWeb.contract().at(newAdmin);
//
//   let proxyImplementation = await admin_contract.getProxyImplementation(proxyContractAddress).call({})
//   proxyImplementation = window.tronWeb.address.fromHex(proxyImplementation)
//
//   console.log(proxyImplementation)
//
//   // let implementation = events[2].result.implementation;
//   // implementation = window.tronWeb.address.fromHex(implementation)
//   // console.log(newAdmin, implementation);
//   return [newAdmin, proxyImplementation];
// }


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
      adminContractAddress: adminContractAddress,
      select_read: async () => {
        type.value = 'read';
      },
      select_white: async () => {
        type.value = 'write';
      },
      query: async (e, name) => {
        try {
          // console.log('read', e, name);
          const function_abi = read_functions.value[name];
          const form = forms.value[name];
          // console.log(function_abi);
          // console.log(form);
          let args = [];
          if (function_abi.inputs !== undefined) {
            for (let i = 0; i < function_abi.inputs.length; i++) {
              args.push(form[function_abi.inputs[i].name]);
            }
          }
          const result = await proxy_contract[name].apply(this, args).call(
              {}
          );
          // console.log(result);
          forms.value[name].result = result;
        } catch (e) {
          ElNotification.error({
            title: 'Error',
            message: e.toString(),
            duration: 0,
          })
          console.error(e);
        }
      },
      write: async (e, name) => {
        try {
          console.log('write', e, name);
          const function_abi = write_functions.value[name];
          const form = forms.value[name];
          // console.log(function_abi);
          // console.log(form);
          let args = [];
          if (function_abi.inputs !== undefined) {
            for (let i = 0; i < function_abi.inputs.length; i++) {
              args.push(form[function_abi.inputs[i].name]);
            }
          }
          const result = await proxy_contract[name].apply(this, args).send(
              {
                feeLimit: 100000000,
                callValue: 0,
                shouldPollResponse: true
              }
          );
          console.log(result);
          forms.value[name].result = result;
        } catch (e) {
          ElNotification.error({
            title: 'Error',
            message: e.toString(),
            duration: 0,
          })
          console.error(e);
        }
      },
      getTronscanHost: () => {
        if (typeof window.tronWeb === 'undefined') {
          return '#';
        }

        let host = window.tronWeb.fullNode.host;
        if (host === 'https://api.shasta.trongrid.io') {
          return 'https://shasta.tronscan.io/#/address/';
        } else {
          return 'https://tronscan.io/#/address/';
        }
      },
      handleClick: async () => {

        try {

          // let address = await getFirstEvent(proxyContractAddress.value);
          let slot = await getSlot(proxyContractAddress.value,);
          adminContractAddress.value = slot[0]
          logicContractAddress.value = slot[1]

          // adminContractAddress.value = address[0];
          // logicContractAddress.value = address[1];
          //
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

              let form = {
                result: '',
              };
              if (logic_abi[i].inputs != undefined) {
                for (let j = 0; j < logic_abi[i].inputs.length; j++) {
                  if (logic_abi[i].inputs[j].name === undefined) {
                    logic_abi[i].inputs[j]['name'] = j;
                  }

                  form[logic_abi[i].inputs[j].name] = null;
                }
              }
              // console.log(form);
              forms.value[logic_abi[i].name] = form;
            }
          }

          console.log(forms.value);
        } catch (e) {
          ElNotification.error({
            title: 'Error',
            message: e.toString(),
            duration: 0,
          })
          console.error(e);
        }
      },

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
