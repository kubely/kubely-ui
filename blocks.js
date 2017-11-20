Blockly.Blocks['version'] = {
  init: function() {
    this.appendStatementInput("version")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("1"), "version");
    this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('version 2');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/');
  }
};

Blockly.Blocks['service_name'] = {
  init: function() {
    this.appendStatementInput("service_name")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("web"), "service_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip('service name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#service-configuration-reference');
  }
};

Blockly.Blocks['main'] = {
    init: function() {
        this.appendStatementInput("main")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("main");
        this.setHelpUrl("main");
    }
};

Blockly.Blocks['image'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("image")
            .appendField(new Blockly.FieldTextInput("image"), "image");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("image");
        this.setHelpUrl("image");
    }
};

Blockly.Blocks['image_name'] = {
  init: function() {
    this.appendValueInput("image_name")
        .setCheck("String")
        .appendField("image");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Image name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#image');
  }
};

Blockly.Blocks['ports_mappings'] = {
init: function() {
    this.appendStatementInput("ports_mappings")
        .setCheck(null)
        .appendField("ports_mappings");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#ports');
  }
};


Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Blocks['restart'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("restart")
        .appendField(new Blockly.FieldTextInput("always"), "restart");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['container_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("container_name")
            .appendField(new Blockly.FieldTextInput("name"), "container_name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("container_name");
        this.setHelpUrl("container_name");
    }
};

Blockly.Blocks['labels'] = {
  init: function() {
    this.appendStatementInput("labels")
        .setCheck(null)
        .appendField("labels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['label_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("your label"), "label_output");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['environment'] = {
  init: function() {
    this.appendStatementInput("environment")
        .setCheck(null)
        .appendField("environment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#environment');
  }
};

Blockly.Blocks['args'] = {
init: function() {
    this.appendStatementInput("args")
        .setCheck(null)
        .appendField("args");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#ports');
  }
};

Blockly.Blocks['env_file'] = {
  init: function() {
    this.appendValueInput("env_file")
        .setCheck("String")
        .appendField("env_file");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Image name goes here');
    this.setHelpUrl('https://docs.docker.com/compose/compose-file/compose-file-v2/#image');
  }
};






Blockly.Blocks['containers'] = {
    init: function () {
        this.appendStatementInput("containers")
            .setCheck(null)
            .appendField("containers");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("containers");
        this.setHelpUrl("containers");
    }
};

Blockly.Blocks['services'] = {
    init: function() {
        this.appendStatementInput("services")
            .setCheck(null)
            .appendField("services");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("services");
        this.setHelpUrl("services");
    }
};

Blockly.Blocks['name'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("name")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("name");
        this.setHelpUrl("name");
    }
};

Blockly.Blocks['service_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("service_type")
            .appendField(new Blockly.FieldDropdown([["NodePort","NodePort"], ["LoadBalancer","LoadBalancer"], ["ClusterIP","ClusterIP"]]), "service_type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("service_type");
        this.setHelpUrl("service_type");
    }
};

Blockly.Blocks['service_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("service_name")
            .appendField(new Blockly.FieldTextInput("name"), "service_name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("service_name");
        this.setHelpUrl("service_name");
    }
};