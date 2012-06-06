(function(exports){

    var address_mode_def = [];

    address_mode_def['S_IMPLIED'] = {size:1, short:'sngl'};
    address_mode_def['S_IMMEDIATE'] = {size:2, short:'imm'};
    address_mode_def['S_ACCUMULATOR'] = {size:1, short:'acc'};
    address_mode_def['S_ZEROPAGE'] = {size:2, short:'zp'};
    address_mode_def['S_ZEROPAGE_X'] = {size:2, short:'zpx'};
    address_mode_def['S_ZEROPAGE_Y'] = {size:2, short: 'zpy'};
    address_mode_def['S_ABSOLUTE'] = {size:3, short: 'abs'};
    address_mode_def['S_ABSOLUTE_X'] = {size:3, short: 'absx'};
    address_mode_def['S_ABSOLUTE_Y'] = {size:3, short: 'absy'};
    address_mode_def['S_INDIRECT_X'] = {size:2, short: 'indx'};
    address_mode_def['S_INDIRECT_Y'] = {size:2, short: 'indy'};
    address_mode_def['S_RELATIVE'] = {size:2, short: 'rel'};

    var opcodes = [];
    opcodes['ADC'] = {imm:0x69, zp:0x65, zpx:0x75, abs:0x6d, absx:0x7d, absy:0x79, indx:0x61, indy:0x71};
    opcodes['AND'] = {imm:0x29, zp:0x25, zpx:0x35, abs:0x2d, absx:0x3d, absy:0x39, indx:0x21, indy:0x31};
    opcodes['ASL'] = {acc:0x0a, zp:0x06, zpx:0x16, abs:0x0e, absx:0x1e};
    opcodes['BCC'] = {rel:0x90};
    opcodes['BCS'] = {rel:0xb0};
    opcodes['BEQ'] = {rel:0xf0};
    opcodes['BIT'] = {zp:0x24, abs:0x2c};
    opcodes['BMI'] = {rel:0x30};
    opcodes['BNE'] = {rel:0xd0};
    opcodes['BPL'] = {rel:0x10};
    opcodes['BVC'] = {rel:0x50};
    opcodes['BVS'] = {rel:0x70};
    opcodes['CLC'] = {sngl:0x18};
    opcodes['CLD'] = {sngl:0xd8};
    opcodes['CLI'] = {sngl:0x58};
    opcodes['CLV'] = {sngl:0xb8};
    opcodes['CMP'] = {imm:0xc9, zp:0xc5, zpx:0xd5, abs:0xcd, absx:0xdd, absy:0xd9, indx:0xc1, indy:0xd1};
    opcodes['CPX'] = {imm:0xe0, zp:0xe4, abs:0xec};
    opcodes['CPY'] = {imm:0xc0, zp:0xc4, abs:0xcc};
    opcodes['DEC'] = {zp:0xc6, zpx:0xd6, abs:0xce, absx:0xde};
    opcodes['DEX'] = {sngl:0xca};
    opcodes['DEY'] = {sngl:0x88};
    opcodes['EOR'] = {imm:0x49, zp:0x45, zpx:0x55, abs:0x4d, absx:0x5d, absy:0x59, indx:0x41, indy:0x51};
    opcodes['INC'] = {zp:0xe6, zpx:0xf6, abs:0xee, absx:0xfe};
    opcodes['INX'] = {sngl:0xe8};
    opcodes['INY'] = {sngl:0xc8};
    opcodes['JMP'] = {abs:0x4c};
    opcodes['JSR'] = {abs:0x20};
    opcodes['LDA'] = {imm:0xa9, zp:0xa5, zpx:0xb5, abs:0xad, absx:0xbd, absy:0xb9, indx:0xa1, indy:0xb1};
    opcodes['LDX'] = {imm:0xa2, zp:0xa6, zpy:0xb6, abs:0xae, absy:0xbe};
    opcodes['LDY'] = {imm:0xa0, zp:0xa4, zpx:0xb4, abs:0xac, absx:0xbc};
    opcodes['LSR'] = {acc:0x4a, zp:0x46, zpx:0x56, abs:0x4e, absx:0x5e};
    opcodes['NOP'] = {sngl:0xea};
    opcodes['ORA'] = {imm:0x09, zp:0x05, zpx:0x15, abs:0x0d, absx:0x1d, absy:0x19, indx:0x01, indy:0x11};
    opcodes['PHA'] = {sngl:0x48};
    opcodes['PHP'] = {sngl:0x08};
    opcodes['PLA'] = {sngl:0x68};
    opcodes['PLP'] = {sngl:0x28};
    opcodes['ROL'] = {imm:0x2a, zp:0x26, zpx:0x36, abs:0x2e, absx:0x3e};
    opcodes['ROR'] = {imm:0x6a, zp:0x66, zpx:0x76, abs:0x6e, absx:0x7e};
    opcodes['RTI'] = {sngl:0x40};
    opcodes['RTS'] = {sngl:0x60};
    opcodes['SBC'] = {imm:0xe9, zp:0xe5, zpx:0xf5, abs:0xed, absx:0xfd, absy:0xf9, indx:0xe1, indy:0xf1};
    opcodes['SEC'] = {sngl:0x38};
    opcodes['SED'] = {sngl:0xf8};
    opcodes['SEI'] = {sngl:0x78};
    opcodes['STA'] = {zp:0x85, zpx:0x95, abs:0x8d, absx:0x9d, absy:0x99, indx:0x81, indy:0x91};
    opcodes['STX'] = {zp:0x86, zpy:0x96, abs:0x8e};
    opcodes['STY'] = {zp:0x84, zpx:0x94, abs:0x8c};
    opcodes['TAX'] = {sngl:0xaa};
    opcodes['TAY'] = {sngl:0xa8};
    opcodes['TSX'] = {sngl:0xba};
    opcodes['TXA'] = {sngl:0x8a};
    opcodes['TXS'] = {sngl:0x9a};
    opcodes['TYA'] = {sngl:0x98};

    exports.address_mode_def = address_mode_def;
    exports.opcodes = opcodes;

})(typeof exports === 'undefined'? this['c6502']={}: exports);