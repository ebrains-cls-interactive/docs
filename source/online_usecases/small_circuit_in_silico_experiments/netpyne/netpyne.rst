.. _netpyne:

=======================================================================================
NetPyNE tool for multiscale modeling of brain circuits
=======================================================================================

NetPyNE is an NIH-funded tool for data-driven multiscale modeling of brain circuits. It enables users to consolidate complex experimental data from different brain scales into a unified
 computational model. NetPyNE builds on top of NEURON, one of the most widely used neural simulation engines. NetPyNE is unique integrating all major steps of the modeling workflow under 
 a single framework. The core of NetPyNE consists of a standardized JSON-like declarative language that allows the user to define the model across scales, from molecules to neurons to 
 circuits. The NetPyNE API can then be used to automatically generate the corresponding NEURON network, run parallel simulations, optimize and explore parameters, and visualize and 
 analyze the results through a wide range of built-in functions. NetPyNE facilitates model sharing by exporting/importing to the NeuroML and SONATA standardized formats. 

All functionality is also available via a state-of-the art web-based graphical application, which now includes management of simulations and automated exploration of parameters. This is 
the only graphical tool that allows users to define parameters values to explore, run the corresponding simulations and visualize the results. Additionally, the web app is fully 
integrated with the Open Source Brain (OSB) platform, providing users with an online persistent workspace, file management, access to online resources and interactive jupyter notebooks. 

NetPyNE has been interfaced with CoreNEURON, and several large-scale models were benchmarked on GPUs for the first time, obtaining impressive 40x speedups. The new interface with the 
LFPykit tool allows NetPyNE to generate dipole current moments for any arbitrary model, and simulate EEG signals at electrodes placed along a head volume conduction model. The new 
co-simulation interface between NetPyNE and The Virtual Brain (TVB) achieves a new milestone for multiscale modeling: linking molecular chemical signaling (via RxD) to whole-brain network 
dynamics. NetPyNE is now also available as a service on the Human Brain Project EBRAINS platform, including example use cases. The SciUnit tool has been adapted to work with NetPyNE, 
resulting in the NetPyNEUnit package which facilitates model reproducibility, validation and evaluation. 

At least 25 publications describe models or tools that have made use of NetPyNE, including our recent detailed models of the motor, auditory and somatosensory thalamocortical circuits, and of spinal cord circuits. Others have developed NetPyNE models to study Parkinson's disease, schizophrenia, ischemic stroke and epilepsy. 

The Cellullar Level Simulation Interactive Workflows and Use Cases includes a set of NetPyNE tutorials and models under the "Small Circuit InSilico Experiments" section: |netpyne_uc|. This includes tutorials on building a simple network, an oscillatory network, a multiscale cortical network with RxD, importing existing cell models, analysis and plotting, running batch parameter explorations and example motor cortex (M1) and hippocampal CA3 network models.   

Full NetPyNE documentation and tutorials can be found at |netpyne|.

.. |netpyne| raw:: html  

    <a href="https://netpyne.org/" target="_blank">NetPyNE</a>

.. |netpyne_uc| raw:: html  

    <a href="https://ebrains-cls-interactive.github.io/online-use-cases.html" target="_blank">Small Circuit In Silico Experiments</a>

