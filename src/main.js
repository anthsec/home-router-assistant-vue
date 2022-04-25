import { createApp } from 'vue'
import App from './App.vue'

import { Button } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Col, Row } from 'vant'
import { Field } from 'vant'
import { Icon } from 'vant';



const app = createApp(App)

app.use(Button)
app.use(Cell)
app.use(CellGroup)
app.use(Col)
app.use(Row)
app.use(Field)
app.use(Icon)



app.mount('#app')


