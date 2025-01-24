---
title: 断言
---

## 常规断言

- `Status code: Code is 200`

  - **描述**: 验证API响应的状态码是否为200（OK），这通常意味着请求成功。
  - **代码示例**:
    ```javascript
    pm.test('Status code is 200', function () {
      pm.expect(pm.response.code).to.equal(200);
    });
    ```

- `Response body: Contains string`

  - **描述**: 检查API的响应体中是否包含特定的字符串，用于验证响应内容是否符合预期。
  - **代码示例**:
    ```javascript
    pm.test('Body contains string', function () {
      pm.expect(pm.response.text()).to.include('string_you_want_to_search');
    });
    ```

- `Response body: JSON value check`

  - **描述**: 校验JSON响应体中的某个键值对是否等于预期的值，确保返回的数据正确无误。
  - **代码示例**:
    ```javascript
    pm.test('Your test name', function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData.value).to.eql(100); // 使用 .eql() 进行深比较
    });
    ```

- `Response body: Is equal to a string`

  - **描述**: 确认整个响应体完全匹配给定的字符串，适用于返回固定文本的API。
  - **代码示例**:
    ```javascript
    pm.test('Body equals string', function () {
      pm.expect(pm.response.text()).to.equal('response_body_string');
    });
    ```

- `Response headers: Content-Type header check`

  - **描述**: 验证响应头中Content-Type是否设置为预期的内容类型，如`application/json`。
  - **代码示例**:
    ```javascript
    pm.test('Content-Type is present and correct', function () {
      pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');
    });
    ```

- `Response time is less than 200ms`

  - **描述**: 确保API响应时间不超过200毫秒，以保证服务性能。
  - **代码示例**:
    ```javascript
    pm.test('Response time is less than 200ms', function () {
      pm.expect(pm.response.responseTime).to.be.below(200);
    });
    ```

- `Status code: Successful POST request`

  - **描述**: 验证POST请求是否成功，通常成功的POST请求返回状态码201（Created）或202（Accepted）。
  - **代码示例**:
    ```javascript
    pm.test('Successful POST request', function () {
      pm.expect([201, 202]).to.include(pm.response.code);
    });
    ```

- `Status code: Code name has string`

  - **描述**: 检查状态码是否对应于特定的状态码名称，例如“Created”对应状态码201。
  - **代码示例**:
    ```javascript
    pm.test('Status code name has string', function () {
      pm.expect(pm.response.code.toString()).to.match(/201/); // 使用正则表达式进行匹配
    });
    ```

- `Response body: Convert XML body to a JSON Object`

  - **描述**: 将XML格式的响应体转换为JSON对象，以便更方便地进行断言和数据处理。
  - **代码示例**:

    ```javascript
    // 注意：Postman内置并不直接支持xml2js，需要先安装或寻找替代方案。
    // 下面是一个概念性的示例，实际应用时需要替换为有效的XML解析逻辑
    var xml2js = require('xml2js'); // 注意：此行在Postman环境中无效，因为Postman不支持require语句
    var parser = new xml2js.Parser();

    parser.parseString(pm.response.text(), function (err, result) {
      var jsonObject = result;
      console.log(jsonObject); // 输出转换后的JSON对象供调试使用
    });
    ```

- `Schema validation`

  - **描述**: 验证响应体是否符合指定的JSON模式（schema）。这里使用了tv4库来进行模式验证。
  - **代码示例**:

    ```javascript
    var schema = {
      items: {
        type: 'boolean',
      },
    };

    var data1 = [true, false];
    var data2 = [true, 123];

    pm.test('Schema is valid for data1', function () {
      pm.expect(tv4.validate(data1, schema)).to.be.true;
    });

    pm.test('Schema is not valid for data2', function () {
      pm.expect(tv4.validate(data2, schema)).to.be.false; // data2不符合schema，因此期望结果为false
    });
    ```

## 动态参数断言

脚本中不能使用 Postman 内置的动态参数。<br>
在断言中取自定义动态参数的方式：

- `pm.globals.get('times')`
- `globals['times']`
- `globals.times`

## 全局断言

放到集合断言里
