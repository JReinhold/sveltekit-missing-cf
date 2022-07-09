<script lang="ts" context="module">
	export const load: import('@sveltejs/kit').Load = async ({ session }) => {
		return {
			props: {
				cf: session.cf
			}
		};
	};
</script>

<script lang="ts">
	export let cf: string;
</script>

<h1><code>cf</code> property from request</h1>
<pre>
    <code>
        {cf}
    </code>
</pre>
