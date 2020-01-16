'use strict';

goog.provide('Blockly.Blocks.system');

goog.require('Blockly.Blocks');


Blockly.Blocks.system.HUE = 120;


Blockly.Blocks.base_delay = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendValueInput("DELAY_TIME", Number)
        .appendField(Blockly.DLMLY_DELAY + '(' + Blockly.DLMLY_DELAY_MS + ')')
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.DLMLY_TOOLTIP_CONTROL_DELAY);
  }
};

Blockly.Blocks['system_eval'] = {
 init: function() {
    
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendValueInput('VAR')
        .setCheck(String)
        .appendField(Blockly.DLMLY_PYTHON_SYSTEM_EVAL);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.DLMLY_PYTHON_SYSTEM_EVAL_TOOLTIP);
  }
};


Blockly.Blocks.controls_millis = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
	    .appendField(Blockly.blockpy_time_time);
    this.setOutput(true, Number);
	this.setTooltip(Blockly.DLMLY_TOOLTIP_CONTROL_MILLIS);
  }
};

Blockly.Blocks['time_localtime'] = {
    init: function() {
        this.setColour(Blockly.Blocks.system.HUE);        
        this.appendDummyInput("")
            .appendField(Blockly.DLMLY_SYSTEM_TIME_LOCALTIME)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_ALL, "all"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_YEAR, "0"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_MONTH, "1"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_DATE, "2"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_HOUR, "3"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_MINUTE, "4"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_SECOND, "5"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_INWEEK, "6"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_INYEAR, "7"],
                [Blockly.DLMLY_SYSTEM_TIME_LOCALTIME_DST, "8"]                
            ]), "op");
        this.setOutput(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.Panic_with_status_code = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendValueInput("STATUS_CODE", Number)
        .appendField(Blockly.DLMLY_MICROBIT_Panic_with_status_code)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.DLMLY_TOOLTIP_CONTROL_DELAY);
  }
};

Blockly.Blocks.reset = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
      .appendField(Blockly.DLMLY_MICROBIT_Reset_micro);
    this.setPreviousStatement(true);
    // this.setNextStatement(true);
  }
};



Blockly.Blocks.controls_mstimer2 = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
	this.appendValueInput('TIME')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField('MsTimer2')
        .appendField(Blockly.DLMLY_MSTIMER2_EVERY);
    this.appendDummyInput()
		.appendField('ms');
	this.appendStatementInput('DO')
        .appendField(Blockly.DLMLY_MSTIMER2_DO);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.controls_mstimer2_start = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
		.appendField('MsTimer2')
		.appendField(Blockly.DLMLY_MSTIMER2_START);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.controls_mstimer2_stop = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
		.appendField('MsTimer2')
		.appendField(Blockly.DLMLY_MSTIMER2_STOP);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.time_sleep = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendValueInput("DELAY_TIME", Number)
        .appendField(Blockly.DLMLY_DELAY)        
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.DLMLY_NOVA_RTC_SEC)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.DLMLY_TOOLTIP_CONTROL_DELAY);
  }
};