import {Knob} from "./Knob";

export const KnobGroup = class Group {
    constructor(label, knobs) {
        this.label = label
        this.knobs = knobs
    }
}

export const Controller = class Controller {
    constructor(){
        this.vco1_wave = new Knob("wave form", "vco1_wave", 0, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)
        this.vco1_pw = new Knob("pw", "vco1_pw", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco1_scale = new Knob("scale", "vco1_scale", 3, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)

        this.vco2_wave = new Knob("wave form", "vco2_wave", 0, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)
        this.vco2_pitch = new Knob("pitch", "vco2_pitch", 0, -5, 5, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco2_scale = new Knob("scale", "vco2_scale", 3, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)

        this.portamento = new Knob("time", "portamento", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.master_tune = new Knob("", "mater_tune", 0, -5, 5, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.vco1_level = new Knob("VCO 1 level", "vco1_level", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco2_level = new Knob("VCO 2 level", "vco2_level", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.freq_modulation_mg_t_ext = new Knob("MG/T.EXT", "freq_modulation_mg_t_ext", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.freq_modulation_egt_ext = new Knob("EGT/EXT", "freq_modulation_egt_ext", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.cutoff_frequency_modulation_mg_t_ext_1 = new Knob("MG/T.EXT", "cutoff_frequency_modulation_mg_t_ext_1", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.cutoff_frequency_modulation_eg2_ext_1 = new Knob("EG2/XT", "cutoff_frequency_modulation_eg2_ext_1", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.cutoff_frequency_modulation_mg_t_ext_2 = new Knob("MG/T.EXT", "cutoff_frequency_modulation_mg_t_ext_2", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.cutoff_frequency_modulation_eg2_ext_2 = new Knob("EG2/XT", "cutoff_frequency_modulation_eg2_ext_2", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.voltage_controlled_highpass_filter_cutoff_freq = new Knob("Cutoff frequency", "voltage_controlled_highpass_filter_cutoff_freq", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.BIG)
        this.voltage_controlled_highpass_filter_peak = new Knob("Peak", "voltage_controlled_highpass_filter_peak", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.voltage_controlled_lowpass_filter_cutoff_freq = new Knob("Cutoff frequency", "voltage_controlled_lowpass_filter_cutoff_freq", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.BIG)
        this.voltage_controlled_lowpass_filter_peak = new Knob("Peak", "voltage_controlled_lowpass_filter_peak", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.modulation_generator_wave = new Knob("Wave form", "modulation_generator_wave", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.modulation_generator_freq = new Knob("Frequency", "modulation_generator_freq", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.envelope_generator_1_delay = new Knob("Delay time", "envelope_generator_1_delay", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_1_attack = new Knob("Attack time", "envelope_generator_1_attack", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_1_release = new Knob("Release time", "envelope_generator_1_release", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.envelope_generator_2_hold = new Knob("Hold time", "envelope_generator_2_hold", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_attack = new Knob("Attack time", "envelope_generator_2_attack", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_decay = new Knob("Decay time", "envelope_generator_2_decay", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_sustain = new Knob("Sustain level", "envelope_generator_2_sustain", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_release = new Knob("Release time", "envelope_generator_2_release", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.external_signal_processor_signal = new Knob("Signal level", "external_signal_processor_signal", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_low_cut_freq = new Knob("Low cut freq", "external_signal_processor_low_cut_freq", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_high_cut_freq = new Knob("High cut freq", "external_signal_processor_high_cut_freq", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_cv_adjust = new Knob("CV adjust", "external_signal_processor_cv_adjust", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_threshold = new Knob("Threshold level", "external_signal_processor_threshold", 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
    }
}
