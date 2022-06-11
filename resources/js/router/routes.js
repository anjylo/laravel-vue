const ExampleComponent = () => import('../components/ExampleComponent.vue');

const routes = [
    {
        path: '/',
        name: 'ExampleComponent',
        component: ExampleComponent
    },
];

export default routes;