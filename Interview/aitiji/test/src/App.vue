<template>
	<div class="page">
		<div class="contain">
			<div class="header">Task Tracker</div>
			<div class="form">
				<el-form v-model="form" label-position="top" label-width="auto">
					<el-row>
						<el-col>
							<el-form-item label="Task">
								<el-input v-model="form.task" />
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col>
							<el-form-item label="Day & Time">
								<el-input v-model="form.day_time" />
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col>
							<el-form-item label="Activity type">
								<el-checkbox-group v-model="form.status">
									<el-checkbox name="type" />
								</el-checkbox-group>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col>
							<el-button type="success" @click="addItem">Success</el-button>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div class="show">
				<ul>
					<li v-for="item in list" :key="item.index">
						<div>
							<div>{{ item.task }}</div>
							<div>{{ item.day_time }}</div>
						</div>
						<div><el-button @click="deleteItem(index)">删除</el-button></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import ElementPlus from 'element-plus';
import { ElInput } from 'element-plus';
import { ElCheckboxGroup } from 'element-plus';
import { ElCheckbox } from 'element-plus';
import { ElButton } from 'element-plus';
import { ElForm } from 'element-plus';
import { ElFormItem } from 'element-plus';
import { ElCol } from 'element-plus';
import { ElRow } from 'element-plus';

import 'element-plus/dist/index.css';
import { ref, reactive } from 'vue';

const form = reactive({
	task: '',
	day_time: '',
	status: '',
});

const list = reactive([]);

function addItem() {
	list.push(form);
	console.log('e: ', list);
}
function deleteItem(index) {
	list.pop(index);
}
</script>

<style scoped>
.page {
	width: 100%;
	height: 100%;
	background-color: white;
}
</style>
