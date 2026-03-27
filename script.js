// JavaScript functions for TriCore Dashboard

// API Integration
async function fetchDataFromAPI(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Tab Switching
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Form Handling
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    // Here you can add code to handle form submission, e.g., send data to an API
}

// Supabase Connectivity
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchSupabaseData(table) {
    const { data, error } = await supabase
        .from(table)
        .select('*');
    if (error) console.error('Error fetching Supabase data:', error);
    return data;
}