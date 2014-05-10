if (typeof define !== 'function') { var define = require('amdefine')(module);}

if (typeof nodeunit === 'undefined') { var nodeunit = {run: function(){}};}


define (
    [
        '../tests_browser/adc_test.js',
        '../tests_browser/and_test.js',
        '../tests_browser/asl_test.js',
        '../tests_browser/bcc_test.js',
        '../tests_browser/bcs_test.js',
        '../tests_browser/beq_test.js',
        '../tests_browser/bit_test.js',
        '../tests_browser/bmi_test.js',
        '../tests_browser/bne_test.js',
        '../tests_browser/bpl_test.js',
        '../tests_browser/bvc_test.js',
        '../tests_browser/bvs_test.js',
        '../tests_browser/clc_test.js',
        '../tests_browser/cld_test.js',
        '../tests_browser/cli_test.js',
        '../tests_browser/clv_test.js',
        '../tests_browser/cmp_test.js',
        '../tests_browser/cpx_test.js',
        '../tests_browser/cpy_test.js',
        '../tests_browser/dec_test.js',
        '../tests_browser/dex_test.js',
        '../tests_browser/dey_test.js',
        '../tests_browser/eor_test.js',
        '../tests_browser/inx_test.js',
        '../tests_browser/inc_test.js',
        '../tests_browser/iny_test.js',
        '../tests_browser/jmp_test.js',
        '../tests_browser/jsr_test.js',
        '../tests_browser/lda_test.js',
        '../tests_browser/ldx_test.js',
        '../tests_browser/ldy_test.js',
        '../tests_browser/lsr_test.js',
        '../tests_browser/nop_test.js',
        '../tests_browser/ora_test.js',
        '../tests_browser/pha_test.js',
        '../tests_browser/php_test.js',
        '../tests_browser/pla_test.js',
        '../tests_browser/plp_test.js',
        '../tests_browser/rol_test.js',
        '../tests_browser/ror_test.js',
        '../tests_browser/rti_test.js',
        '../tests_browser/rts_test.js',
        '../tests_browser/sbc_test.js',
        '../tests_browser/sec_test.js',
        '../tests_browser/sed_test.js',
        '../tests_browser/sei_test.js',
        '../tests_browser/sta_test.js',
        '../tests_browser/stx_test.js',
        '../tests_browser/sty_test.js',
        '../tests_browser/tax_test.js',
        '../tests_browser/tay_test.js',
        '../tests_browser/tsx_test.js',
        '../tests_browser/tya_test.js'
    ],

    function(
            adc_test,
            and_test,
            asl_test,
            bcc_test,
            bcs_test,
            beq_test,
            bit_test,
            bmi_test,
            bne_test,
            bpl_test,
            bvc_test,
            bvs_test,
            clc_test,
            cld_test,
            cli_test,
            clv_test,
            cmp_test,
            cpx_test,
            cpy_test,
            dec_test,
            dex_test,
            dey_test,
            eor_test,
            inc_test,
            inx_test,
            iny_test,
            jmp_test,
            jsr_test,
            lda_test,
            ldx_test,
            ldy_test,
            lsr_test,
            nop_test,
            ora_test,
            pha_test,
            php_test,
            pla_test,
            plp_test,
            rol_test,
            ror_test,
            rti_test,
            rts_test,
            sbc_test,
            sec_test,
            sed_test,
            sei_test,
            sta_test,
            stx_test,
            sty_test,
            tax_test,
            tay_test,
            tsx_test,
            tya_test
        ) {

            nodeunit.run(
                {
                    'adc test': adc_test,
                    'and_test': and_test,
                    'asl_test': asl_test,
                    'bcc_test': bcc_test,
                    'bcs_test': bcs_test,
                    'beq_test': bcs_test,
                    'bit_test': bit_test,
                    'bmi_test': bmi_test,
                    'bne_test': bne_test,
                    'bpl_test': bpl_test,
                    'bvc_test': bvc_test,
                    'bvs_test': bvs_test,
                    'clc_test': clc_test,
                    'cld_test': cld_test,
                    'cli_test': cli_test,
                    'clv_test': clv_test,
                    'cmp_test': cmp_test,
                    'cpx_test': cpx_test,
                    'cpy_test': cpy_test,
                    'dec_test': dec_test,
                    'dex_test': dex_test,
                    'dey_test': dey_test,
                    'eor_test': eor_test,
                    'inc_test': inc_test,
                    'inx_test': inx_test,
                    'iny_test': iny_test,
                    'jmp_test': jmp_test,
                    'jsr_test': jsr_test,
                    'lda_test': lda_test,
                    'ldx_test': ldx_test,
                    'ldy_test': ldy_test,
                    'lsr_test': lsr_test,
                    'nop_test': nop_test,
                    'ora_test': ora_test,
                    'pha_test': pha_test,
                    'php_test': php_test,
                    'pla_test': pla_test,
                    'plp_test': plp_test,
                    'rol_test': rol_test,
                    'ror_test': ror_test,
                    'rti_test': rti_test,
                    'rts_test': rts_test,
                    'sbc_test': sbc_test,
                    'sec_test': sec_test,
                    'sed_test': sed_test,
                    'sei_test': sei_test,
                    'sta_test': sta_test,
                    'stx_test': stx_test,
                    'sty_test': sty_test,
                    'tax_test': tax_test,
                    'tay_test': tay_test,
                    'tsx_test': tsx_test,
                    'tya_test': tya_test
                }
            );
        }
);

