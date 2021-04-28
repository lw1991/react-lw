import React, { useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import store from 'store'
import Spinner from 'react-spinkit'
// import dayjs from 'dayjs'

import { getList } from 'api/demo'

const Demo = (props) => {
  const { loading, list, lastUpdated } = useSelector(state => ({
    list: state.list,
    loading: state.loading.global,
    lastUpdated: state.updated.list.modifySync
  }), shallowEqual)

  useEffect(() => {
    let data = {"msg":"操作成功","code":200,"data":[{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":100,"parentId":0,"ancestors":"0","deptName":"若依科技","orderNum":"0","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":101,"parentId":100,"ancestors":"0,100","deptName":"深圳总公司","orderNum":"1","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":102,"parentId":100,"ancestors":"0,100","deptName":"长沙分公司","orderNum":"2","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":103,"parentId":101,"ancestors":"0,100,101","deptName":"研发部门","orderNum":"1","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":104,"parentId":101,"ancestors":"0,100,101","deptName":"市场部门","orderNum":"2","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":105,"parentId":101,"ancestors":"0,100,101","deptName":"测试部门","orderNum":"3","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":106,"parentId":101,"ancestors":"0,100,101","deptName":"财务部门","orderNum":"4","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":107,"parentId":101,"ancestors":"0,100,101","deptName":"运维部门","orderNum":"5","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":108,"parentId":102,"ancestors":"0,100,102","deptName":"市场部门","orderNum":"1","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-03-18 14:43:18","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":109,"parentId":102,"ancestors":"0,100,102","deptName":"财务部门","orderNum":"2","leader":"若依","phone":"15888888888","email":"ry@qq.com","status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-04-15 18:02:13","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":111,"parentId":105,"ancestors":"0,100,101,105","deptName":"人事","orderNum":"1","leader":null,"phone":null,"email":null,"status":"0","delFlag":"0","parentName":null,"children":[]},{"searchValue":null,"createBy":"admin","createTime":"2021-04-15 18:02:34","updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":112,"parentId":111,"ancestors":"0,100,101,105,111","deptName":"招聘部","orderNum":"1","leader":null,"phone":null,"email":null,"status":"0","delFlag":"0","parentName":null,"children":[]}]}
    
    let arr = data.data.map( i => {
      return i
    })
    console.log(arr)
    // console.log(list, 'store')
    // console.log(dayjs(lastUpdated).format('YYYY-MM-DD HH:mm:ss'), 'lastUpdated')
  }, [ lastUpdated, list, loading ])

  useEffect(() => {
    (async() => {
      let res = await getList()
      console.log(res)
    })()
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: 11,
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park',
        },
        {
          key: 12,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
              key: 121,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park',
            },
          ],
        },
        {
          key: 13,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park',
          children: [
            {
              key: 131,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 2 Lake Park',
              children: [
                {
                  key: 1311,
                  name: 'Jim Green jr.',
                  age: 25,
                  address: 'London No. 3 Lake Park',
                },
                {
                  key: 1312,
                  name: 'Jimmy Green sr.',
                  age: 18,
                  address: 'London No. 4 Lake Park',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const modifyList = useCallback(() => {
    store.dispatch.list.modifyName()
  }, [])

  function iptChange(key) {
    store.dispatch.list.modifySync(key)
  }

  return (
    <div>
      <div>App Component {" "}</div>
      <Link to='/about'>跳转路由1</Link>
      <button onClick={modifyList}>修改store</button>
      {
        list.map((item, key) => (
          <div key={key}>
            <input
              type="checkbox"
              onChange={() => iptChange(key)}
              checked={item.disabled}
            />
            当前名字：<span>{item.name}</span>
          </div>
        ))
      }
      {
        loading &&
        <Spinner name="line-scale" color="black" />
      }
      <Table
        columns={columns}
        // rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </div>
  )
}

export default Demo
