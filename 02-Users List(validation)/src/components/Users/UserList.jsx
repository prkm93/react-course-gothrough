import React from 'react';
import Card from '../UI/Card';
import styles from "./UserList.module.css";

function UserList({ userLists }) {
  return (
      userLists.length 
      &&
      <Card className={styles.users}>
      <ul>
        {
          userLists.length ?
          userLists.map((item, idx) =>(
              <li key={item.id}>
                {item.name}  ({item.age} years old)
              </li>
            )
          )
          :<div></div>
        }
      </ul>
    </Card>
  );
}

export default UserList;