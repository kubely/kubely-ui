Blockly.JavaScript['version'] = function(block) {
  var text_version_name = block.getFieldValue('version');
  var statements_version = Blockly.JavaScript.statementToCode(block, 'version');
  //  console.log(statements_version);
   var dict12 = {};
         a = statements_version.split("!");
    function jsonConcat(o1, o2) {
          for (var key in o2) {
           o1[key] = o2[key];
          }
          return o1;
         }
    var config = {};
    for(i = 0; i< a.length-1; i++){


             q = JSON.parse(a[i]);
             config = jsonConcat(config, q);


           }

      //   aq = a[a.length - 2];

      //   b = JSON.parse(aq);

  dict12['filename'] = text_version_name;
 dict12['data'] = config;
//
// //dict12['Services'] = {"null":"22", "redis":"22", "redis":"22"};
// //dict['Services'] = {web: "", red: "", fg: ""};
   code = JSON.stringify(dict12);
  //  code = text_version_name+statements_version;
   // console.log(text_version_name, statements_version);
  return code+"!";
};

Blockly.JavaScript['main'] = function(block) {
    var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
    // TODO: Assemble JavaScript into code variable.
    var dict12 = {};
    a = statements_main.split("!");
    function jsonConcat(o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    }
    var config = {};
    var final = [];
    for(i = 0; i< a.length-1; i++) {

        q = JSON.parse(a[i]);
        config = jsonConcat(config, q);
        final.push(q);

    }
    dict12['kedge'] = final;
 //   return dict12;
    var code = JSON.stringify(dict12);
    return code;
};

/////////////////////
Blockly.JavaScript['name'] = function(block) {
    var text_name = block.getFieldValue('name');
    var dict = {};
    dict["name"] = text_name;
    // TODO: Assemble JavaScript into code variable.
    var code = JSON.stringify(dict);
    return code+"!";
};
/////////////////////////

Blockly.JavaScript['containers'] = function(block) {
    var statements_containers = Blockly.JavaScript.statementToCode(block, 'containers');
    // TODO: Assemble JavaScript into code variable.
   // console.log(statements_containers);
    var dict = {};


         a = statements_containers.split("!");
    function jsonConcat(o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    }
    var config = {};
    for(i = 0; i< a.length-1; i++){


        q = JSON.parse(a[i]);
        config = jsonConcat(config, q);


    }
   // console.log("container is", config);
      //   a = JSON.parse(a);
    dict["containers"] = [config];

    var code =JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['image'] = function(block) {
    var text_image = block.getFieldValue('image');
    // TODO: Assemble JavaScript into code variable.
    var dict = {};
    dict["image"] = text_image;
    var code =JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['controller'] = function(block) {
    var dropdown_service_type = block.getFieldValue('controller');
    // TODO: Assemble JavaScript into code variable.
    var dict = {};
    dict["controller"] = dropdown_service_type;
    var code = JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['container_name'] = function(block) {
    var text_container_name = block.getFieldValue('container_name');
    // TODO: Assemble JavaScript into code variable.
    var dict = {};
    dict["name"] = text_container_name;
    var code =JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['services'] = function(block) {
    var statements_services = Blockly.JavaScript.statementToCode(block, 'services');
    // TODO: Assemble JavaScript into code variable.
    var dict = {};
    a = statements_services.split("!");
    function jsonConcat(o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    }
    var config = {};
    for(i = 0; i< a.length-1; i++){


        q = JSON.parse(a[i]);
        config = jsonConcat(config, q);


    }
    dict["services"] = [config];
    var code =JSON.stringify(dict);
    return code+"!";

};

Blockly.JavaScript['service_type'] = function(block) {
    var dropdown_service_type = block.getFieldValue('service_type');
    // TODO: Assemble JavaScript into code variable.
   var dict = {};
    dict["type"] = dropdown_service_type;
    var code = JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['service_name'] = function(block) {
    var text_service_name = block.getFieldValue('service_name');
    // TODO: Assemble JavaScript into code variable.
    var dict = {};
    dict["name"] = text_service_name;
    var code = JSON.stringify(dict);
    return code+"!";
};

Blockly.JavaScript['ports_mappings'] = function(block) {
    var statements_ports = Blockly.JavaScript.statementToCode(block, 'ports_mappings');
    a = statements_ports.split("!");
    a.splice(a.length-1, 1);
    a[0] = a[0].trim();
    var dict = {};
    dict['PortMappings'] = a;

    var code = JSON.stringify(dict);
    return code+'!';
};

Blockly.JavaScript['env_mappings'] = function(block) {
    var statements_ports = Blockly.JavaScript.statementToCode(block, 'env_mappings');
    a = statements_ports.split("!");
    a.splice(a.length-1, 1);
    a[0] = a[0].trim();
    var dict = {};
    dict['PortMappings'] = a;

    var code = JSON.stringify(dict);
    return code+'!';
};

Blockly.JavaScript['ports'] = function(block) {
    var statements_ports = Blockly.JavaScript.statementToCode(block, 'ports');
    a = statements_ports.split("!");
    a.splice(a.length-1, 1);
    a[0] = a[0].trim();
    var dict = {};
    dict['PortMappings'] = a;

    var code = JSON.stringify(dict);
    return code+'!';
};

Blockly.JavaScript['label_output'] = function(block) {
    var text_label_output = block.getFieldValue('label_output');
    var code = text_label_output.trim();
    return code+'!';
};

Blockly.JavaScript['page_text'] = function(block) {
    var text_text = block.getFieldValue('page_text');
    var code = text_text;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['labels'] = function(block) {
  var statements_labels = Blockly.JavaScript.statementToCode(block, 'labels');
             a = statements_labels.split("!");
             a.splice(a.length-1, 1);
              a[0] = a[0].trim();
            var dict = {};
            dict['labels'] = a;

   var code = JSON.stringify(dict);
  return code+'!';
};

Blockly.JavaScript['env'] = function(block) {
    var text_key = block.getFieldValue('key');
    var text_value = block.getFieldValue('value');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};