import {useEffect} from 'react';
import { List } from "antd";

export default function TodoList({ loading, itemList, setItemList, setLoading}) {

useEffect(() => {
  fetch('https://much-to-do-api-aa2.web.app/items')
  .then(resp => resp.json())
  .then(setItemList)
  .catch(alert)
  .finally(() => setLoading(false))
}, [])

  return(
    <section>
      <List
      bordered
      dataSource={itemList}
      loading={loading}
      size='large'
      renderItem={(task) => (
        <List.Item className={(task.done) && 'done'}>
          {task.item}
        </List.Item>
      )}
      />
    </section>
  )
}